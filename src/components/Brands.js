import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { brandsList } from '../images/brands';

export default function Brands() {
    //const brandsArray = [element, girl, grizzly, independent, planB, real, spitfire, vans, high, nikesb, ous];
    const [brands, setBrands] = useState({})
    
    useEffect(()=> {axios.get('http://localhost:4000/brands')
        .then((response) => {
            setBrands(response.data);
        })
    },[]);

    return (
        <BrandsBox>
            <AiOutlineLeftCircle size={40}/>
            <div>
                {brandsList.map(({ name, image }) => (
                    <img key={name} src={image} alt={name} />
                ))}
            </div>
            <AiOutlineRightCircle size={40}/>
        </BrandsBox>
    );
}

const BrandsBox = styled.div `
    display: flex;
    align-items: center;
    margin: 20px auto;
    width: 90vw;
    overflow: hidden;
    img {
        margin: 0 25px;
        height: 100px;
        width: 100px;
    }
    div {
        height: 100px;
    }
`