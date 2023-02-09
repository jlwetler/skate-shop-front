import styled from "styled-components";
import { useContext } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";

export default function ProductsContainer({ products, orderBy, setOrderBy, category  }) {
    const navigate = useNavigate();
    const { setProduct } = useContext(ProductContext);

    function handleOrder(e) {
        setOrderBy(e.target.value);
    }

    function openProduct(p) {
        setProduct(p);
        navigate(`/produto/${p.name}`)
    }

  return <Products>
      <header>
        {category}
        <span>
          Buscar por:
          <select onChange={handleOrder} value={orderBy}>
            <option></option>
            <option>Menor preço</option>
            <option>Maior preço</option>
            <option>Nome (A-Z)</option>
          </select>
        </span>
      </header>
      {products.map((p) => (
        <section key={p.id}>
          <img
            src={p.image}
            alt="product-logo"
            onClick={() => openProduct(p)}
          />
          <div style={{ height: 25 }}>{p.name}</div>
          <div style={{ color: "#961322" }}>
            R$ {(p.price / 100).toFixed(2)}
          </div>
          <div style={{ color: "#444444" }}>
            ou em até 6x de R$ {(p.price / 600).toFixed(2)}
          </div>
          <button onClick={() => openProduct(p)}>
            <AiOutlineSearch /> Detalhes do produto
          </button>
        </section>
      ))}
    </Products>
}


const Products = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    img {
        width:187.5px;
        height: 250px;
        cursor: pointer;
    }
    div {
        margin: 20px;
    }
    header {
        padding: 10px 0;
        width: 75vw;
        height: 40px;
        font-size: 25px;
        display: flex;
        justify-content: space-between;
        select {
            text-align: right;
            height: 25px;
        }
    }
    section {
        width: 280px;
        text-align: center;
        margin: 20px 0;
    }
    button {
        background: #6bc6d6;
        font-family: 'Rubik', sans-serif;
        font-size: 14px;
        height: 35px;
        border-radius: 20px;
        cursor: pointer;
    }
    select {
        margin-left: 10px;
        border-radius: 7px;
    }
`;