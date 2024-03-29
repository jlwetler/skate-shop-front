import styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import CartContext from "../contexts/CartContext";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartContent() {
  const { cart, setCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const frete = totalPrice > 29999 ? 0 : 3000;
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    const total = cart.reduce(
      (total, { price, quantity }) => (total += price*quantity),
      0
    );
    setTotalPrice(total);
  }, [cart]);

  function deleteItem(product) {
    const newCart = cart.filter((c) => c !== product);
    setCart(newCart);
  }

  function changeItem(product, op) {
    let quantity = 1;
    if (op === "-" && product.quantity > 1) {
      quantity = product.quantity - 1;
    } else if (op === "+" && product.quantity < product.stock) {
      quantity = product.quantity + 1;
    } else {
      return;
    }
    let newCart = [];

    cart.map(p => {
      if (p === product) {
        p.quantity = quantity;
      }
      newCart.push(p);
    });
    setCart(newCart);
    newCart = [];
  }

  function sendOrder() {
    const cartInfo = cart.map(({ id, quantity, price }) => ({
      id,
      quantity,
      price,
    }));

    const orderPrice = totalPrice + frete;
    const body = { cartInfo, orderPrice };

    axios
      .post("http://localhost:4000/finish-order", body, config)
      .then(() => {
        alert("Compra registrada!");
        setCart([]);
        navigate("/user");
      })
      .catch(() => {
        alert("Erro na compra!");
      });
  }

  return (
    <>
      <CartProducts>
        <Description>
          <Product>Produto</Product>
          <Quantity>Quantidade</Quantity>
          <Subtotal>Subtotal</Subtotal>
        </Description>
        {cart.map((product) => (
          <ProductBox key={product.id}>
            <Product>
              <img src={product.image} alt="product logo" />
              <span>
                <p>{product.name}</p>
                <p style={{ color: "#961322" }}>
                  R$ {(product.price / 100).toFixed(2)}
                </p>
                <p>Estoque: {product.stock}</p>
              </span>
            </Product>
            <ProductQuantity>
              <p
                onClick={() => changeItem(product, "-")}
                style={{ cursor: "pointer" }}
              >
                -
              </p>
              <p>{product.quantity}</p>
              <p
                onClick={() => changeItem(product, "+")}
                style={{ cursor: "pointer" }}
              >
                +
              </p>
            </ProductQuantity>
            <Subtotal>
              <p>R$ {((product.price * product.quantity) / 100).toFixed(2)}</p>
            </Subtotal>
            <TrashIcon size={25} onClick={() => deleteItem(product)} />
          </ProductBox>
        ))}
      </CartProducts>
      <FinishOrderBox>
        <TotalOrder>
          <ul>
            <li>
              <nav>Subtotal :</nav>
              <nav>R$ {(totalPrice / 100).toFixed(2)}</nav>
            </li>
            <li>
              <nav>Frete :</nav>
              <nav>R$ {(frete / 100).toFixed(2)}</nav>
            </li>
            <li>
              <nav>Total :</nav>
              <nav>R$ {((totalPrice + frete) / 100).toFixed(2)}</nav>
            </li>
            <p>
              R$ {((totalPrice / 100 + 30) * 0.95).toFixed(2)} com 5% de
              desconto no pix
            </p>
            <p>Ou em até 6x de R$ {((totalPrice / 100 + 30) / 6).toFixed(2)}</p>
          </ul>
        </TotalOrder>
        <Button>
          {user.length === 0 ? (
            <span onClick={() => navigate("/login")}>
              Faça login para finalizar a compra
            </span>
          ) : (
            <span onClick={sendOrder}>
              <CartIcon /> Finalizar compra{" "}
            </span>
          )}
        </Button>
      </FinishOrderBox>
    </>
  );
}

const TrashIcon = styled(BiTrash)`
  cursor: pointer;
  margin-left: 15px;
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 18px;
  margin-right: 8px;
`;

const TotalOrder = styled.div`
  padding: 20px;
  width: 25vw;
  height: 150px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  border-box: 1px solid;
  margin-bottom: 3vh;
  li {
    width: calc(25vw - 40px);
    margin: 12px 0;
    display: flex;
    justify-content: space-between;
  }
  p {
    color: #961322;
    width: calc(25vw - 40px);
    text-align: right;
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

const Button = styled.button`
  font-family: "Righteous";
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border-radius: 25px;
  color: #ffffff;
  width: 25vw;
  height: 40px;
  border: none;
  cursor: pointer;
  :hover {
    background: #4b5051;
  }
`;

const CartProducts = styled.section`
  width: 50vw;
  align-items: center;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  border-box: 1px solid;
`;

const ProductBox = styled.div`
  display:flex;
  align-items: center;
  height: 150px;
  border-top: 1px solid #d9e0dc;
  & > div {
    border: none;
  }
`;

const Description = styled.section`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 5px;
`;

const Product = styled.div`
  margin-left: 50px;
  width: 20vw;
  margin-right: 3vw;
  p {
      margin: 10px 0;
  }
`;

const Quantity = styled.div`
  text-align: center;
  width: 7vw;
`;

const Subtotal = styled.div`
  margin-left:6vw;
  width: 6vw;
`;

const ProductQuantity = styled.span`
  text-align: center;
  width: 7vw;
  display: flex;
  font-size: 20px;
  justify-content: space-around;
  border: 1px solid #000;
  border-radius: 10px;
`;

const FinishOrderBox = styled.section`
  margin-left: 5vw;
`