import styled from 'styled-components';
import { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import CartContext from '../contexts/CartContext';
import CartContent from './CartContent';

export default function Cart() {
    const { cart } = useContext(CartContext);

    return <>
        <Header/>
        <Title>Meu carrinho</Title>
        <CartBox cart={cart}>
            {cart.length === 0 ? 
                <EmptyCart>Nenhum produto adicionado ao carrinho ainda</EmptyCart> :
                <CartContent />
            }
        </CartBox>   
        <Footer/>
    </>
}

const Title = styled.div`
    text-align: center;
    padding: 30px;
    font-size: 25px;
`
const EmptyCart = styled.span`
    margin: 40px auto;
    font-size: 20px;
    height: 30vh;
`

const CartBox = styled.div `
    display: flex;
    width: 80vw;
    margin: ${(props) => props.cart.length === 1 ? '10px 10vw 20vh 10vw' : '10px 10vw'};
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

