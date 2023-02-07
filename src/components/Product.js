import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

export default function Product({ product }) {
    const { productId } = useParams();
    const [ brand, setBrand ] = useState();
    const [quantity, setQuantity] = useState(0);

    useEffect(()=> {axios.get(`http://localhost:4000/brands/${product.brandId}`)
    .then((response) => {
        setBrand(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
    },[product]);
    console.log(brand);
    return <>
        <Header />
        <ProductInfo>
            <img src={product.image} alt={product.name} />
            <section>
                <h1>{product.name}</h1>
                <img src={brand.image} alt={brand.name} />
                <p>R$ {(product.price/100).toFixed(2)}</p>
                <span>Estoque: {product.stock}</span>
                
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
    }
    p {
        font-size: 25px;
        color: #961322;
        margin: 20px 0;
    }
`;