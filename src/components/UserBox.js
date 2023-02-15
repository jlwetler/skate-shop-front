import styled from "styled-components";
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaUserCircle, FaStar } from "react-icons/fa";
import { GoListUnordered } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";


export default function UserBox({ setShowAccount, setShowOrders, setShowDesireList }) {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('user');
        setUser([]);
        navigate('/');
    }

    return <Container>
        <section>
            <h1><FaUser size={20} /> {user.name} </h1>
            <p onClick={() => {setShowAccount(true); setShowOrders(false); setShowDesireList(false)}}>
                <FaUserCircle /> Minha conta
            </p>
            <p onClick={() => {setShowOrders(true); setShowAccount(false); setShowDesireList(false)}}>
                <GoListUnordered/> Meus pedidos
            </p>
            <p onClick={() => {setShowDesireList(true); setShowAccount(false); setShowOrders(false)}}>
                <FaStar/> Lista de desejos
            </p>
            <p onClick={logout}><IoIosLogOut />
                Sair da conta
            </p>
        </section>
    </Container>
}

const Container = styled.div `
    margin: 8vh 5vw 0 10vw;
    display: flex;
    height: 25vh;
    section {
        width: 18vw;
    }
    h1 {
        padding-bottom: 1vh;
        font-size: 18px;
        margin-bottom: 1vh;
        border-bottom: 1px solid #000;
    }
    p {
        font-size: 16px;
        margin-bottom: 1vh;
        cursor: pointer;
    }
`