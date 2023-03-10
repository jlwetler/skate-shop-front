import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import UserBox from './UserBox';
import MyAccount from './MyAccount';
import MyOrders from './MyOrders';
import { FaStar } from "react-icons/fa";

export default function UserAccount () {
    const { user } = useContext(UserContext);
    const [showAccount, setShowAccount] = useState(true);
    const [showOrders, setShowOrders] = useState(false);
    const [showDesireList, setShowDesireList] = useState(false);
    const navigate = useNavigate();

    if (user.length === 0) navigate('/login');

    return <>
        <Header/>
            <UserContainer>
                <UserBox 
                    setShowAccount={ setShowAccount }
                    setShowOrders={ setShowOrders }
                    setShowDesireList={ setShowDesireList }
                />
                <UserInfo>
                    {showAccount && <MyAccount />}
                    
                    {showOrders && <MyOrders />}
                    
                    {showDesireList &&
                        <section>
                            <header><FaStar /> Lista de desejos</header>
                            <div>
                                
                            </div>
                        </section>
                    }
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
    h1 {
        font-size: 18px;
        margin-bottom: 20px;
    }
    h2 {
        margin-top: 5vh;
        font-size: 20px;
    }
    p {
        margin-bottom: 1vh;
    }
    ul {
        padding: 1vh 0;
    }
    li {
        display: flex;
        margin: 1vh 0;
    }
`; 