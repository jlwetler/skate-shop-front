import styled from "styled-components";
import logo from "../../images/logo.png";
import pagamento from "../../images/pagamento.png";
import entrega from "../../images/entrega.png";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import NewsletterBox from "./NewsletterBox";

export default function Footer() {
  return (
    <Container>
      <NewsletterBox />
      <Box>
        <div>SKATE SHOP LTDA.</div>
        <img src={logo} alt="logo" />
        <div>Sobre Nós</div>
        <div>Política de troca e devolução</div>
      </Box>
      <Box>
        <div style={{ marginBottom: 40 }}>INSTITUCIONAL</div>
        <div>Formas de pagamento:</div>
        <img
          src={pagamento}
          style={{ width: 350, height: 55, marginTop: 0 }}
          alt="logo"
        />
        <div>Entregas:</div>
        <img
          src={entrega}
          style={{ width: 120, height: 45, marginTop: 0 }}
          alt="logo"
        />
      </Box>
      <Box>
        <div>CONTATO</div>
        <div>(XX)-(XXXXX-XXXX)</div>
        <div>skate@shop.com.br</div>
        <div>
          <AiOutlineWhatsApp size={30} />
          <AiOutlineInstagram size={30} />
          <AiOutlineFacebook size={30} />
        </div>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  background: #000;
`;

const Box = styled.div`
  width: 25%;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
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
  button {
    width: 100px;
    height: 35px;
    font-family: "Rubik", sans-serif;
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
  div {
    margin: 20px 0;
  }
`;
