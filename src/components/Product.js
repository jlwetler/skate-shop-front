import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ProductContext from "../contexts/ProductContext";
import CartContext from '../contexts/CartContext';
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Product() {
    const [ brand, setBrand ] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { cart, setCart} = useContext(CartContext);
    const { product } = useContext(ProductContext);
    
    if(quantity < 0 && product.stock === 0) {
        setQuantity(0);
    } else if(quantity < 1 && product.stock !== 0) {
        setQuantity(1);
    } else if(quantity > product.stock) {
        setQuantity(product.stock);
    }

    useEffect(()=> {
        axios.get(`http://localhost:4000/brands/${product.brandId}`)
        .then(response => {
            setBrand(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[]);

    function addToCart (product) {
        
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === product.name) {
              alert('Produto já consta no carrinho!');
              return;
            }
        }
        setCart([...cart, {...product, quantity}])
        alert('Produto adicionado ao carrinho!')
    }

    return <>
        <Header />
        <ProductInfo>
            <img src={product.image} alt={product.name} />
            <section>
                <h1>{product.name}</h1>
                <img src={brand.image} alt={brand.name} />
                <h2>
                    R$ {(product.price/100).toFixed(2)}
                </h2>
                <h2 style={{color: '#444444'}}>
                    ou em até 6x de R$ {(product.price/600).toFixed(2)}
                </h2>
                {product.stock !== 0 ? 
                    <span>Estoque: {product.stock}</span> : 
                    <span>Out of stock!</span>
                }
                <div>
                    <span onClick={()=> setQuantity(quantity - 1)}>-</span>
                    <p>{quantity}</p>
                    <span onClick={()=> setQuantity(quantity + 1)}> +</span>
                </div>    
                <button onClick={() => addToCart(product)} disabled={product.stock > 0 ? false : true}>
                    <AiOutlineShoppingCart/> Adicionar ao carrinho
                </button>
            </section>
        </ProductInfo>
        <Footer />
    </>
}

const ProductInfo = styled.div`
    padding: 20px;
    display:flex;
    justify-content: center;
    & > img {
        width: 375 px;
        height: 500px;
    }
    section {
        text-align: center;
        padding: 20px;
    }
    h1 {
        font-size: 30px;
        height: 60px;
    }
    h2 {
        font-size: 25px;
        color: #961322;
        margin: 20px 0;
    }
    div {
        display: flex;
        width: 100px;
        justify-content: center;
        margin: 20px auto;
        font-size: 25px;
        border: 1px solid #000;
        border-radius: 10px;
        p {
            width: 20px;
        }
        span {
            margin: 0 10px;
            cursor: pointer;
        }
    }
    button {
        background: lightgreen;
        font-family: 'Rubik', sans-serif;
        font-size: 18px;
        height: 45px;
        border-radius: 20px;
        cursor: pointer;
    }
`;