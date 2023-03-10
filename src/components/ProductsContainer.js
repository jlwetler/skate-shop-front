import styled from "styled-components";
import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";

export default function ProductsContainer({ 
  products, 
  orderBy, 
  setOrderBy, 
  category  
}) {
    const navigate = useNavigate();
    const { setProduct } = useContext(ProductContext);

    function handleOrder(e) {
        setOrderBy(e.target.value);
    }

    function openProduct(p) {
        setProduct(p);
        navigate(`/produto/${p.name}`)
    }

  return (
    <Products>
      <FilterContainer>
        {category}
        <SearchContainer>
          Buscar por:
          <select onChange={handleOrder} value={orderBy}>
            <option></option>
            <option>Menor preço</option>
            <option>Maior preço</option>
            <option>Nome (A-Z)</option>
          </select>
        </SearchContainer>
      </FilterContainer>
      <ProductsWrapper>
        {products.map((p) => (
          <ProductBox key={p.id}>
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
          </ProductBox>
        ))}
      </ProductsWrapper>
      
    </Products>
  )
}

const Products = styled.div`
  width: 88vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  img {
    width:187.5px;
    height: 250px;
    cursor: pointer;
  }
  div {
    margin: 20px 13px;
  }
  button {
    background: #6bc6d6;
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    height: 35px;
    border-radius: 20px;
    cursor: pointer;
  }
`;

const FilterContainer = styled.div`
  padding: 10px 0;
  width: 100%;
  height: 40px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  select {
      text-align: right;
      height: 25px;
      margin-left: 10px;
      border-radius: 7px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductBox = styled.div`
  width: 280px;
  text-align: center;
`;