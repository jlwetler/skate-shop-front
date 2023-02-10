import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import { FaUser, FaUserCircle, FaStar } from "react-icons/fa";
import { GoListUnordered } from "react-icons/go";

export default function UserAccount () {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    console.log(user);
    if (user.length === 0) navigate('/login');
    
    return <>
        <Header/>
            <UserContainer>
                <UserBox>
                <section>
                    <h1> <FaUser size={20} /> {user.name}</h1>
                    <p><FaUserCircle /> Minha conta</p>
                    <p><GoListUnordered/> Meus pedidos</p>
                    <p><FaStar/> Lista de desejos</p>
                </section>
                </UserBox>
                <UserInfo>
                    <section>
                        <header><FaUserCircle /> Minha conta</header>
                        <div>
                            <div>
                                <h1>Dados cadastrais</h1>
                                <p>Nome: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <p>Celular:</p>
                            </div>
                            <div>
                                <h1>Endereço de entrega</h1>
                                <p>Endereço: {user.address}</p>
                                <p>CEP: {user.cep}</p>
                                <p>Bairro: {user.bairro}</p>
                                <p>Cidade/UF: {user.city}</p>
                            </div>
                        </div>
                    </section>
                </UserInfo>
            </UserContainer>
        <Footer/>
    </>
}

const UserContainer = styled.div`
    display: flex;
    section {
        padding: 20px;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
        border-radius: 30px;
        border-box: 1px solid #000;
`;

const UserBox = styled.div `
    margin: 8vh 5vw 0 10vw;
    display: flex;
    height: 22vh;
    section {
        width: 18vw;
    }
    h1 {
        width: 16vw;
        padding-bottom: 10px;
        font-size: 18px;
        margin-bottom: 10px;
        border-bottom: 1px solid #000;
    }
    p {
        font-size: 16px;
        margin-bottom: 10px;
    }
`

const UserInfo = styled.div`
    margin: 8vh 0;
    width: 50vw;
    section {
        & > div {
            padding-top: 2vh;
            display: flex;
            justify-content: space-between;
        }
    }
    header {
        font-size: 20px;
        border-bottom: 1px solid #000;
        height: 4vh;
    }
    h1 {
        font-size: 18px;
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 5px;
    }
`; 