import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import element from '../images/brands/element.png';
import girl from '../images/brands/girl.png';
import grizzly from '../images/brands/grizzly.png';
import independent from '../images/brands/independent.png';
import planB from '../images/brands/planB.png';
import real from '../images/brands/real.png';
import spitfire from '../images/brands/spitfire.png';
import vans from '../images/brands/vans.png';
import high from '../images/brands/high.png';
import nikesb from '../images/brands/nikesb.png';
import ous from '../images/brands/ous.png';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

export default function Brands() {
    const brandsArray = [element, girl, grizzly, independent, planB, real, spitfire, vans, high, nikesb, ous];
    const [brands, setBrands] = useState({})
    
    useEffect(()=> {axios.get('http://localhost:4000/brands')
        .then((response) => {
            setBrands(response.data);
        })
    },[]);

    return <>
        <BrandsBox>
            <AiOutlineLeftCircle size={40}/>
            <div>
                {brandsArray.map(b => <img src={b} alt='brand'/> )}
            </div>
            
            <AiOutlineRightCircle size={40}/>
        </BrandsBox>
    </>
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