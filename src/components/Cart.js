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
        <CartContainer>
            <CartBox cart={cart}>
                {cart.length === 0 ? 
                    <EmptyCart>Nenhum produto adicionado ao carrinho ainda</EmptyCart> :
                    <CartContent />
                }
            </CartBox>   
        </CartContainer>
        <Footer/>
    </>
}

const Title = styled.div`
    text-align: center;
    padding: 25px;
    font-size: 25px;
`

const EmptyCart = styled.span`
    margin: 40px auto;
    font-size: 20px;
    height: 30vh;
`

const CartContainer = styled.div`
    min-height: 80vh;
`

const CartBox = styled.div `
    display: flex;
    width: 80vw;
    margin: ${(props) => props.cart.length === 1 ? '10px 10vw 20vh 10vw' : '10vh 10vw'};
    div {
        display:flex;
        align-items: center;
    }
    img {
        width: 90px;
        height: 120px;
        margin-right: 1vw;
    }
`;

