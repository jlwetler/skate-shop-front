import styled from 'styled-components';
import logo from '../images/logo.png';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
    AiOutlineSearch, 
    AiOutlineUser,
    AiOutlineShoppingCart,
    AiOutlineDownCircle 
} from "react-icons/ai";

export default function Header() {
    const [ search, setSearch] = useState('');
    const [ subCategories, setSubCategories] = useState('');
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=> {axios.get('http://localhost:4000/categories')
        .then((response) => {
            setCategories(response.data);
        })
        .catch((error)=> {
            console.log(error);
        })
    },[]);

    function searchItem() {
        console.log(search);
        navigate(`/search/${search}`);
    }

    return (
        <>
            <Top>
                <span>Frete grátis nas compras acima de R$299,99 para todo o Brasil</span>
            </Top>
            <NavBar>
                <img src={logo} alt='logo' />
                <SearchBar>
                    <input 
                        type="text" 
                        placeholder="Pesquisar" 
                        value={search} 
                        onChange={e => setSearch(e.target.value)} 
                        required
                    />
                    <div onClick={searchItem}>
                        <AiOutlineSearch size={30} />
                    </div>
                    
                </SearchBar>
                <section>
                    <div>
                        <Link to={'/login'}>
                            <AiOutlineUser size={30} />
                        </Link>
                        <p>Minha conta</p>
                    </div>
                    <div>
                        <Link to={'/carrinho'}>
                            <AiOutlineShoppingCart size={30} />
                        </Link>
                        <p>Meu carrinho</p>
                    </div>
                </section>
            </NavBar>
            <CategoriesBar>
                {categories.map((category)=>
                    <Link to={`/categoria/${category.name}`} key={category.id}>
                        <div>
                            <span>{category.name}</span><AiOutlineDownCircle size={18}/>
                        </div>
                    </Link>
                )}
                <div>
                    <span>Marcas </span><AiOutlineDownCircle size={18}/>
                </div>
                <div>
                    <span>SALE </span><AiOutlineDownCircle size={18}/>
                </div>
            </CategoriesBar>  
        </>
    )
}

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    width: 100vw;
    height: 40px;
`;

const NavBar = styled.div `
    width: 100vw;
    height: 90px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
        width: 80px;
    }
    section {
        display: flex;
        width: 140px;
        div {
            text-align:center;
        }
        a {
            color: #000;
            cursor: pointer;
        }
    }
`;

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 40px;
    border: 2px solid #000;
    border-radius: 50px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
    input {
        border-radius: 50px;
        width: 400px;
        height: 36px;
        border: none;
    }
    input:focus {
        outline: none;
      }
    div {
        width: 40px;
        text-align: center;
        border-left: 1px solid #000;
        cursor: pointer;
    }    
`;

const CategoriesBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 100px;
    width: 100vw;
    height: 45px;
    background: #000;
    color: #fff;
    div{
        height: 45px;
        display: flex;
        align-items: center;
    }
    span {
        margin-right: 8px;
    }
    div:hover{
        color: lightblue;
        cursor: pointer;
    }
`;