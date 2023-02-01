import styled from 'styled-components';
import logo from '../images/logo.png';
import { useState } from 'react';
import { 
    AiOutlineSearch, 
    AiOutlineWhatsApp, 
    AiOutlineInstagram,
    AiOutlineUser,
    AiOutlineShoppingCart,
    AiOutlineDownCircle 
} from "react-icons/ai";
import categories from './categories';

export default function Header() {
    const [ search, setSearch] = useState('');

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
                    <AiOutlineSearch size={30} />
                </SearchBar>
                <div>
                    <AiOutlineWhatsApp size={30} />
                    <AiOutlineInstagram size={30} />
                    <AiOutlineUser size={30} />
                    <AiOutlineShoppingCart size={30} />
                </div>
            </NavBar>
            <Categories>
                <div>
                    <span>Skate </span><AiOutlineDownCircle size={20}/>
                </div>
                <div>
                    <span>Acessórios </span><AiOutlineDownCircle size={20}/>
                </div>
                <div>
                    <span>Roupas </span><AiOutlineDownCircle size={20}/>
                </div>
                <div>
                    <span>Tênis </span><AiOutlineDownCircle size={20}/>
                </div>
                <div>
                    <span>Marcas </span><AiOutlineDownCircle size={20}/>
                </div>
                <div>
                    <span>SALE </span><AiOutlineDownCircle size={20}/>
                </div>
            </Categories>  
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
    height: 160px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
        width: 120px;
    }
`;

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 40px;
    border: 2px solid #000;
    border-radius: 50px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
    input {
        border-radius: 50px;
        width: 450px;
        height: 36px;
        border: none;
    }
    input:focus {
        outline: none;
      }    
`;

const Categories=styled.div`
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