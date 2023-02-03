import styled from 'styled-components';
import { useState } from 'react';
import logo from '../images/logo.png';
import pagamento from '../images/pagamento.png';
import entrega from '../images/entrega.png';

export default function Footer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Inscrito como ${name} e ${email}`)
        setName('');
        setEmail('');
    }

    return <Container>
        <Box>
            <div style={{marginBottom: 20}}>
                Cadastre-se e receba nossa newsletter!
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Seu nome" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    required
                />
                <input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <button type='submit' >Enviar</button>
            </form>
        </Box>
        <Box>
            <div>
                SKATE SHOP LTDA.
            </div>
            <img src={logo} alt='logo' />
            <div>
                Sobre Nós
            </div>
            <div>
                Política de troca e devolução
            </div>
        </Box>
        <Box>
            <div style={{marginBottom:40}}>INSTITUCIONAL</div>
            <div>Formas de pagamento:</div>
            <img src={pagamento} style={{width: 350, height: 55, marginTop: 0}} alt='logo' />
            <div>Entregas:</div>
            <img src={entrega} style={{width: 120, height: 45, marginTop: 0}} alt='logo' />
        </Box>
        <Box>
            <div>CONTATO</div>
            <div>(XX)-(XXXXX-XXXX)</div>
            <div>skate@shop.com.br</div>
        </Box>
    </Container>
}

const Container = styled.div `
    display: flex;
    width: 100vw;
`
const Box = styled.div `
    width:25vw;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
    background: #000;        
    color: #fff;
    input {
        width: 300px;
        height: 40px;
        border: 2px solid #fafafa;
        border-radius: 50px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
        margin: 10px auto;
    }
    input:focus {
        outline: none;
    }    
    button{
        width: 100px;
        height: 35px;
        font-family: 'Rubik', sans-serif;
        background: #fff;        
        color: #000;
        border: 2px solid #000;
        border-radius: 50px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
        margin: 10px auto;
    }
    button:hover {
        background: lightgray;
        cursor: pointer;
    }
    img {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        margin: 20px 0;
    }
    div{
        margin: 20px 0;
    }
`;