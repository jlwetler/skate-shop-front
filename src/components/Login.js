import SignContainer from './SignContainer';
import Header from "./Header";
import Footer from "./Footer";
import Loading from './Loading';
import { useState, useContext } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import logo from '../images/logo.png';
import SignUp from "./SignUp";

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
        <SignBox>
            <SignContainer>
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
            </SignContainer>

            <SignUp />

        </SignBox>

        <Footer/>
    </>
}

const SignBox = styled.div`
    display: flex;
    justify-content: center;
`

