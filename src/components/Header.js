import styled from 'styled-components';
import logo from '../images/logo.png';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
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
    const [categories, setCategories] = useState([]);
    const { user } = useContext(UserContext);
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
        navigate(`/search/${search}`);
    }

    function account() {
        user.length === 0 ? navigate('/login') : navigate('/user');
    }

    return (
      <HeaderContainer>
        <Top>
          <span>
            Frete grátis nas compras acima de R$299,99 para todo o Brasil
          </span>
        </Top>
        <NavBar>
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
          <SearchBar>
            <input
              type="text"
              placeholder="Pesquisar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
            <div onClick={searchItem}>
              <AiOutlineSearch size={30} />
            </div>
          </SearchBar>
          <section>
            <div 
              onClick={account} 
              style={{ cursor: "pointer" }}
            >
              <AiOutlineUser size={30} />
              <p>Minha conta</p>
            </div>
            <div>
              <Link to={"/carrinho"}>
                <AiOutlineShoppingCart size={30} />
                <p>Meu carrinho</p>
              </Link>
            </div>
          </section>
        </NavBar>
        <CategoriesBar>
          {categories.map((category) => (
            <Link to={`/categoria/${category.name}`} key={category.id}>
              <div>
                <span>{category.name}</span>
                <AiOutlineDownCircle size={18} />
              </div>
            </Link>
          ))}
          <div>
            <span>Marcas </span>
            <AiOutlineDownCircle size={18} />
          </div>
          <div>
            <span>SALE </span>
            <AiOutlineDownCircle size={18} />
          </div>
        </CategoriesBar>
      </HeaderContainer>
    );
}

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    width: 100%;
    height: 40px;
`;

const NavBar = styled.div `
    width: 100%;
    height: 90px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
        width: 80px;
        cursor: pointer;
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
    width: 100%;
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

const HeaderContainer = styled.header`
`;