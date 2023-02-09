import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import Header from "./Header";
import Sidebar from "./SideBar";
import ProductContext from "../contexts/ProductContext";
import ProductsContainer from "./ProductsContainer";
import Footer from "./Footer";
import axios from 'axios';
import styled from "styled-components";

export default function SearchPage() {
    const { search } = useParams();
    const [products, setProducts] = useState([]);
    const [orderBy, setOrderBy] = useState('');
    const { setProduct } = useContext(ProductContext);
    const category = 'Busca';
    const subCategories=[];
    const brands= [];

    useEffect(()=> {
        axios.get(`http://localhost:4000/search/${search}`)
        .then((response) => {
        setProducts(response.data);
    })
    },[search]);


    return <>
        <Header />
        <Container>
          <Sidebar
            category={category}
            subCategories={subCategories}
            brands={brands}
            setProducts={setProducts}
            orderBy={orderBy}
          />
          <ProductsContainer
            products={products}
            setProduct={setProduct}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            category={category}
          />
        </Container>
        <Footer />
      </>
}

const Container=styled.div`
    display:flex;
`