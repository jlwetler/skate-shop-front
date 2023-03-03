import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function Sidebar ({
    category, 
    subCategories, 
    brands, 
    setProducts, 
    orderBy 
}) {
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
        const order = orderBy !== '' ? orderBy.replace(' ','') : ''

        axios
            .get(
                `http://localhost:4000/products/filter/${category}?subCategory=${subCategory}&query=${queryString}&price=${price}&order=${order}`
            )
            .then((response) => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <SidebarContainer subCategory={subCategory}>
            <Title>Filtros</Title>
            <SubCategoryContainer>
                {subCategories.map(sub => (
                    <SubCategoryOption
                        onClick={() => {
                            selectSubCategory(sub.name)
                        }} 
                        key={sub.id}
                        style={
                            subCategory === sub.name ? {borderBottom: '1px solid #000'} : {}
                        }
                    >
                    {sub.name}
                    </SubCategoryOption>
                ))}
            </SubCategoryContainer>
            <Title>Preço</Title>
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
            <Title
                className="pointer" 
                onClick={() => setShowBrands(!showBrands)}
            >
                Marcas <AiOutlineCaretDown />
            </Title>
            <BrandOptions>
            {showBrands && 
                brands.map((sub,i) => (
                    <div className='options' key={brands.id}>
                        <input 
                            type='checkbox' 
                            checked={checked[i]} 
                            onChange={handleChange}
                            id={`checkbox${i}`}
                            value={sub.name}
                        />
                        <label htmlFor={`checkbox${i}`}>{sub.name}</label>
                    </div>
                ))} 
            </BrandOptions>
            <FilterButton onClick={filteredSearch}>Filtrar</FilterButton>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div `
    padding: 20px;
    border-right: 1px solid #444444;
    width: 13vw;
    font-size: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    output {
        margin-bottom: 20px;
    }
    .price {
        width: 90%;
        margin-bottom: 10px;
    }
    .pointer {
        cursor: pointer;
    }
`

const Title = styled.div`
    font-size: 25px;
    color: orangered;
    margin: 10px 0;
    display:flex;
`

const SubCategoryContainer = styled.div`
  margin: 20px 0;
`;

const SubCategoryOption = styled.div`
    cursor: pointer;
    margin-bottom: 10px;
    border-bottom: 1px solid #fff;
    :hover {
    border-bottom: 1px solid #000;
    }
`;

const FilterButton = styled.button`
    background: #6bc6d6;
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    margin-top: 20px;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    cursor: pointer;
`;

const BrandOptions = styled.div`
    text-align: left;
    font-size: 14px;
    .options {
        margin-bottom: 3px;
    }
`;