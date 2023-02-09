import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import Sidebar from './SideBar';
import Footer from './Footer';
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Category({ setProduct }) {
    const { category } = useParams();
    const [ subCategories, setSubCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [orderBy, setOrderBy] = useState('');
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(`http://localhost:4000/subcategories/${category}`)
        .then((response) => {
            setSubCategories(response.data);
        })
    },[category]);

    useEffect(()=> {
        axios.get('http://localhost:4000/brands')
        .then((response) => {
        setBrands(response.data);
    })
    },[]);

    useEffect(()=> {
        axios.get(`http://localhost:4000/products/${category}`)
        .then((response) => {
        setProducts(response.data);
    })
    },[category]);

    function openProduct(p) {
        setProduct(p);
        navigate(`/produto/${p.name}`)
    }
    
    function handleOrder(e) {
        setOrderBy(e.target.value);
    }

    return (
        <>
            <Header />
            <SearchPage>
                <Sidebar 
                    category={category} 
                    subCategories={subCategories}
                    brands={brands}
                    setProducts={setProducts}
                    orderBy={orderBy}
                />
                <Products>
                    <header>
                        {category}
                        <span>
                            Buscar por:  
                            <select onChange={handleOrder} value={orderBy}>
                                <option></option>
                                <option>Menor preço</option>
                                <option>Maior preço</option>
                                <option>Nome (A-Z)</option>
                            </select>
                        </span>
                    </header>
                    {products.map(p => 
                        <section key={p.id}>
                            <img src={p.image} alt='product-logo' onClick={() => openProduct(p)}/>
                            <div style={{height: 25}}>
                                {p.name}
                            </div>
                            <div style={{color: '#961322'}}>
                                R$ {(p.price/100).toFixed(2)}
                            </div>
                            <div style={{color: '#444444'}}>
                                ou em até 6x de R$ {(p.price/600).toFixed(2)}
                            </div>
                            <button onClick={() => openProduct(p)}>
                                <AiOutlineShoppingCart/> Adicionar ao carrinho
                            </button>
                        </section>
                        
                    )}
                    
                </Products>
            </SearchPage>
            <Footer/>
        </>
    )
}

const SearchPage = styled.div `
    display: flex;
`;

const Products = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    img {
        width:187.5px;
        height: 250px;
        cursor: pointer;
    }
    div {
        margin: 20px;
    }
    header {
        padding: 10px 0;
        width: 75vw;
        height: 40px;
        font-size: 25px;
        display: flex;
        justify-content: space-between;
        select {
            text-align: right;
            height: 25px;
        }
    }
    section {
        width: 280px;
        text-align: center;
        margin: 20px 0;
    }
    button {
        background: #6bc6d6;
        font-family: 'Rubik', sans-serif;
        font-size: 14px;
        height: 35px;
        border-radius: 20px;
        cursor: pointer;
    }
    select {
        margin-left: 10px;
        border-radius: 7px;
    }
`;