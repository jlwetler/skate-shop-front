import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import CartContext from '../contexts/CartContext';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

export default function Cart() {
    const { cart, setCart} = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
            const total = cart.reduce((total, { price, quantity }) => 
                total += price*quantity
            ,0)
            setTotalPrice(total);
        }
    ,[cart]);

    function deleteItem(product) {
        const newCart = cart.filter((c) => c !== product);
        setCart(newCart);
    }

    function changeItem(product, op) {
        let quantity = 1;
        if (op === '-' && product.quantity > 1) {
            quantity = product.quantity - 1;
        } else if (op === '+' && product.quantity < product.stock) {
            quantity = product.quantity + 1;
        } else {
            return;
        }
       let newCart = [];
       
       cart.map((p) => {
            if (p === product) {
                p.quantity = quantity;
            }   
            newCart.push(p)
        })
        console.log(newCart);
        setCart(newCart);
        newCart = [];
    }
    return <>
        <Header/>
            <Title>Meu carrinho</Title>
            <CartBox>
                <section>
                    <span className='description'>
                        <span className='product'>Produto</span>
                        <span className='quantity'>Quantidade</span>
                        <span className='subtotal'>Subtotal</span>
                    </span>
                    {cart.map(product => 
                        <div key={product.id}>
                            <div className='product'>
                                <img src={product.image} alt='product logo'/>
                                <span>
                                    <p>
                                        {product.name}
                                    </p> 
                                    <p style={{color: '#961322'}}>
                                        R$ {(product.price/100).toFixed(2)}
                                    </p>  
                                </span>
                            </div>
                            <span className='quantity item'>
                                <p onClick={() => changeItem(product, '-')} style={{cursor:'pointer'}}>
                                    -
                                </p>
                                <p>
                                    {product.quantity}
                                </p>
                                <p onClick={() => changeItem(product, '+')} style={{cursor:'pointer'}}>
                                    +
                                </p>
                            </span>
                            <span className='subtotal'>
                                <p style={{color: '#961322'}}>
                                    R$ {(product.price*product.quantity/100).toFixed(2)}
                                </p>  
                            </span>
                            <TrashIcon
                                size={25}  
                                onClick={() => deleteItem(product)}
                            />
                        </div>
                    )}
                </section>
                <TotalOrder>
                    <ul className='ss'>
                        <li>
                            <nav>Subtotal :</nav>
                            <nav>R$ {(totalPrice/100).toFixed(2)}</nav>
                        </li>
                        <li>
                            <nav>Frete :</nav>
                            <nav>R$ 30.00</nav>
                        </li>
                        <li>
                            <nav>Total :</nav>
                            <nav>R$ {(totalPrice/100 +30).toFixed(2)}</nav>
                        </li>
                            <p>R$ {((totalPrice/100 +30)*0.95).toFixed(2)} com 5% de desconto no pix</p>
                            <p>Ou em até 6x de R$ {((totalPrice/100 +30)/6).toFixed(2)}</p>
                    </ul>
                </TotalOrder>
            </CartBox>
            
        <Footer/>
    </>
}

const Title = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 25px;
`

const CartBox = styled.div `
    display: flex;
    width: 80vw;
    margin: 10px 10vw;
    section {
        width: 50vw;
        align-items: center;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
        border-radius: 30px;
        border-box: 1px solid;
    }
    div {
        display:flex;
        align-items: center;
        height: 150px;
        border-top: 1px solid #d9e0dc;
        & > div {
            border: none;
        }
    }
    img {
        width: 90px;
        height: 120px;
    }
    .description {
        display: flex;
        align-items: center;
        height: 30px;
        padding: 5px;
    }
    .product {
        margin-left: 50px;
        width: 20vw;
        margin-right: 3vw;
        p {
            margin: 10px 0;
        }
    }
    .quantity {
        text-align: center;
        width: 7vw;
    }
    .item {
        display: flex;
        font-size: 20px;
        justify-content: space-around;
        border: 1px solid #000;
        border-radius: 10px;
    }
    .subtotal {
        width: 12vw;
        text-align: right;
    }
`;

const TrashIcon = styled(BiTrash)`
    cursor: pointer;
    margin-left: 15px;
`;

const TotalOrder = styled.div `
    margin-left: 5vw;
    padding: 20px;
    width: 25vw;
    height: 30px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
    border-radius: 30px;
    border-box: 1px solid;
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