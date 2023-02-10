import styled from "styled-components"
import { FaUser, FaUserCircle, FaStar } from "react-icons/fa";
import { GoListUnordered } from "react-icons/go";

export default function UserBox({ name }) {

    return <Container>
        <section>
            <h1> <FaUser size={20} /> {name}</h1>
            <p><FaUserCircle /> Minha conta</p>
            <p><GoListUnordered/> Meus pedidos</p>
            <p><FaStar/> Lista de desejos</p>
        </section>
    </Container>
}

const Container = styled.div `
    margin: 8vh 5vw 0 10vw;
    display: flex;
    height: 20vh;
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