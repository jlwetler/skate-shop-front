import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import UserBox from './UserBox';
import { FaUserCircle } from "react-icons/fa";


export default function UserAccount () {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    console.log(user);
    if (user.length === 0) navigate('/login');
    
    return <>
        <Header/>
            <UserContainer>
                <UserBox name={user.name} />
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