import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { AiOutlineCaretDown } from "react-icons/ai";
import Products from './ProductReleases';

export default function Sidebar ({category, subCategories, brands, setProducts }) {
    const [ maxPrice, setMaxPrice] = useState(1500);
    const [ showBrands, setShowBrands] = useState(false);
    const [subCategory, setSubCategory] = useState('');
    const [checked, setChecked] = useState(
        new Array(brands.length).fill(false)
    );
    
    const [selectedBrands, setSelectedBrands] = useState([]);

    const handleChange = (e) => {
        setChecked(!checked);

        e.target.checked 
            ? setSelectedBrands([...selectedBrands, e.target.value]) 
            : setSelectedBrands(selectedBrands.filter(b => b !== e.target.value))
      };

    const selectSubCategory = (sub) => {
        setSubCategory(sub);
    }

    const filteredSearch = () => {
        const queryString = encodeURIComponent(JSON.stringify(selectedBrands));
        const price = maxPrice*100;
        console.log(queryString);
        console.log(price);
        console.log(subCategory);
        axios.get(`http://localhost:4000/filter/products/${category}?subCategory=${subCategory}&query=${queryString}&price=${price}`)
        .then((response) => {
            setProducts(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return <Filters>
        <div className='title'>
            Filtros
        </div>
        <div className='category'>
            {category}
        </div>
        {subCategories.map(sub => 
            <div className='sub-category' onClick={() => {selectSubCategory(sub.name)}} key={sub.id}>
            {sub.name}
            </div>
        )}
        <div className='title'>Preço</div>
        <input 
            type="range" 
            min="0" 
            max="1500"  
            id="priceRange" 
            value={maxPrice} 
            className='price'
            onChange={e => setMaxPrice(e.target.value)}
        />
        <output htmlFor="priceRange" id="priceOutput">
            R${maxPrice}
        </output>
        <div className='title brands' onClick={() => setShowBrands(!showBrands)}>
            Marcas <AiOutlineCaretDown />
        </div>
        {showBrands && brands.map((sub,i) => 
            <div className='options' key={brands.id}>
                <input 
                    type='checkbox' 
                    checked={checked[i]} 
                    onChange={handleChange}
                    id={`checkbox${i}`}
                    value={sub.name}
                />
                <label htmlFor={`checkbox${i}`}>
                    {sub.name}
                </label>
            </div>
        )} 
        <button onClick={filteredSearch}>
            Filtrar
        </button>
    </Filters>
}

const Filters = styled.div `
    padding: 20px;
    border-right: 1px solid #444444;
    width: 20vw;
    font-size: 20px;
    text-align: center;
    div {
        width: 10vw;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button {
        background: #6bc6d6;
        font-family: 'Rubik', sans-serif;
        font-size: 14px;
        margin-top: 20px;
        width: 100px;
        height: 30px;
        border-radius: 20px;
        cursor: pointer;
    }
    .price {
        width: 10vw;
        margin-bottom: 10px;
    }
    .title {
        font-size: 25px;
        color: orangered;
        margin: 10px 0;
    }
    .brands {
        cursor: pointer;
    }
    .category {
        border-bottom: 1px solid #000;
        margin: 15px 0;
    }
    .sub-category {
        cursor: pointer;
    }
    .sub-category: hover {
        border-bottom: 1px solid #000;
    }
`