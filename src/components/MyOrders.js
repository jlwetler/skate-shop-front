import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { GoListUnordered } from "react-icons/go";

export default function MyAccount() {
    const { user } = useContext(UserContext);
    const [orders, setOrders] = useState([]); 
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    useEffect(()=> {
        axios.get('http://localhost:4000/get-orders', config)
        .then(response => {
            setOrders(response.data);
        })
    }, [])

  return (
    <section>
        <OrderHeader>
          <GoListUnordered /> Meus pedidos
        </OrderHeader>
        <div>
          <div>
            <h1>Dados do usuário</h1>
            <p>Nome: {user.name} {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Celular: {user.phone}</p>
          </div>
          <div>
            <h1>Endereço de entrega</h1>
            <p>Destinatário: {user.name} {user.lastName}</p>
            <p>
              Endereço: {user.street}, {user.district}, {user.city}
            </p>
            <p>CEP: {user.cep}</p>
          </div>
        </div>       
            {orders.map(order =>
                <>
                    <h2>Itens do pedido #00{order.id}</h2>
                    <div>
                        <OrderItems>
                            <Description>
                                <Product>Produto</Product>
                                <Quantity>Preço</Quantity>
                                <Quantity>Quantidade</Quantity>
                                <Subtotal>Subtotal</Subtotal>
                            </Description>
                                <ul>
                                    {order.products.map(p =>  
                                        <li>
                                            <Product>
                                                {p.name}
                                            </Product>
                                            <Quantity>
                                                R$ {(p.paidPrice/100).toFixed(2)}
                                            </Quantity>
                                            <Quantity>
                                                {p.amount}
                                            </Quantity>
                                            <Subtotal>
                                                R$ {(p.paidPrice*p.amount/100).toFixed(2)}
                                            </Subtotal>
                                        </li> 
                                    )}
                                    <Total>
                                        Total: R$ {(order.totalPrice/100).toFixed(2)}
                                    </Total>  
                                </ul>
                                 
                        </OrderItems>                 
                    </div>
                    
                </>
            )}
    </section>
  );
}

const OrderHeader = styled.header`
    font-size: 20px;
    border-bottom: 1px solid #000;
    height: 4vh;
`;

const OrderItems = styled.div`
    width: 47vw;
    align-items: center;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
    border-radius: 30px;
    border-box: 1px solid;
`;

const Description = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    padding: 5px;
    border-bottom: 1px solid #d9e0dc;
`;

const Product = styled.div`
    margin-left: 20px;
    width: 20vw;
    p {
        margin: 10px 0;
    }
`;

const Quantity = styled.div`
    text-align: center;
    width: 7vw;
`;

const Subtotal = styled.div`
    text-align: right;
    width: 10vw;
`;

const Total = styled.div`
    width: 45vw;
    margin: 2vh 0;
    text-align: right;
    color: #961322;
`;