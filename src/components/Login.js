import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Loading from './Loading';
import { useState, useContext } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import logo from '../images/logo.png';

export default function Login() {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function sendLogin() {
        setLoading(true);
        const body = {email, password};
        axios.post('http://localhost:4000/login', body)
        .then((response) => {
            setUser(response.data);
            navigate('/');
        })
        .catch(error => {
            console.log(error.response.status)
            alert('Email ou senha incorretos');
            setLoading(false);
        });
    }

    return <>
        <Header/>
        <Container>
            <img src={logo} alt='logo' />   
            <input 
                type="email" 
                placeholder="E-mail" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required
            />
            <input 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required
            />
            <button disabled={!loading ? false : true} onClick={sendLogin}>
                {!loading ? 'Entrar' : <Loading/>}
            </button>
            <Link to='/sign-up' >
                <span>Não tem uma conta? Cadastre-se</span>
            </Link>
        </Container>
        <Footer/>
    </>
}

const Container = styled.div `
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
        padding: 10px;
        width: 303px;
        height: 45px;
        border: 1px solid #000000;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    input::placeholder {
        font-family: 'Righteous';
        font-size: 18px;
    }
    img {
        width: 205px;
        height: 183pxpx;
        margin-bottom: 20px;
    }
    h1 {
        font-size: 25px;
    }
    button {
        font-family: 'Righteous';
        font-size: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000;
        border-radius: 5px;
        color: #ffffff;
        width: 303px;
        height: 45px;
        border: none;
        disabled {
            opacity: 0.1;
        }           
    }
    button:hover {
        cursor: pointer;
        background: #4b5051;
    }
    a {
        color: #000;
        margin-top: 10px;
    }
    a:hover {
        color: #4b5051;
    }
`;