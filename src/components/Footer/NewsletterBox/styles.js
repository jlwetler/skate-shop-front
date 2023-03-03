import styled from "styled-components";

export const NewsletterContainer = styled.div`
  width: 25%;
  height: 100%;
  h1 {
    color: white;
    margin-bottom: 40px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
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
`;
