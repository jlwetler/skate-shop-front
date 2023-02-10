import styled from "styled-components";

export default styled.div`
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2vw;
    img {
        width: 120px;
        margin-bottom: 10px;
    }
    input {
        padding: 10px;
        width: 290px;
        height: 40px;
        border: 1px solid #000;
        border-radius: 15px;
        margin-bottom: 10px;
    }
    input::placeholder {
        font-family: 'Righteous';
        font-size: 17px;
    }
    span {
        font-size: 17px;
        margin-bottom: 2.5vh;
    }
    button {
        font-family: 'Righteous';
        font-size: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000;
        border-radius: 15px;
        color: #ffffff;
        width: 290px;
        height: 40px;
        border: none;
        disabled {
            opacity: 0.1;
        }           
    }
    button:hover {
        cursor: pointer;
        background: #4b5051;
    }
`;