import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import Sidebar from './SideBar';
import Footer from './Footer';
import ProductsContainer from './ProductsContainer';

export default function Category() {
    const { category } = useParams();
    const [ subCategories, setSubCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [orderBy, setOrderBy] = useState('');


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
                <ProductsContainer 
                    products={products}
                    orderBy={orderBy}
                    setOrderBy={setOrderBy}
                    category={category}
                />
                   
            </SearchPage>
            <Footer/>
        </>
    )
}

const SearchPage = styled.div `
    display: flex;
`;

