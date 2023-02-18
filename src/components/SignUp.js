import axios from 'axios';
import SignContainer from './SignContainer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loading from './Loading';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [cep, setCep] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(true);
    const [showAddress, setShowAddress] = useState(false);
    const navigate = useNavigate();

    function sendUserData() {
        if(password !== confirmPassword) {
            alert('As senhas não conferem, tente novamente.')
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            return;
        }
        setLoading(false);
        const body = {name, lastName, email, password};

        axios.post('http://localhost:4000/sign-up', body)
        .then(() => {
            setLoading(true);
            setShowAddress(!showAddress);
        })
        .catch(error => {
            if (error.response.status === 409) {
                alert('Email já cadastrado, insira um e-mail diferente');
            } else {
                alert('Erro no cadastro, tente novamente');
            }
            setLoading(true);
        })

    }

    function sendAddressData() {
        setLoading(false);
        const body = { street, cep, district, city, email, phone };

        axios.post('http://localhost:4000/sign-up/address', body)
        .then(() => {
            setLoading(true);
            setShowAddress(!showAddress);
            alert('Cadastro realizado com sucesso!');
            navigate('/');
        })
        .catch(error => {
            console.log(error);
            setLoading(true);
        })
    }

    return <> 
        { showAddress ||
        <SignContainer>
            <span>Não tem uma conta? Cadastre-se</span>
            <input 
                type="text" 
                placeholder="Nome" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required
            />
            <input 
                type="text" 
                placeholder="Sobrenome" 
                value={lastName} 
                onChange={e => setLastName(e.target.value)} 
                required
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required
            />
            <input 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required
            />
            <input 
                type="password" 
                placeholder="Confirme a senha" 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
                required
            />
            <button 
                onClick={sendUserData}>{loading ? 'Cadastrar' : <Loading/>}
            </button>
        </SignContainer>
        }
        {showAddress &&
        <SignContainer>
        <span>Informe o seu endereço:</span>
        <input 
            type="text" 
            placeholder="Endereço (Rua, nº e complemento)" 
            value={street} 
            onChange={e => setStreet(e.target.value)} 
            required
        />
        <input 
            type="number" 
            placeholder="CEP" 
            value={cep} 
            onChange={e => setCep(e.target.value)} 
            required
        />
        <input 
            type="text" 
            placeholder="Bairro" 
            value={district} 
            onChange={e => setDistrict(e.target.value)} 
            required
        />
        <input 
            type="text" 
            placeholder="Cidade/UF" 
            value={city} 
            onChange={e => setCity(e.target.value)} 
            required
        />
        <input 
            type="number" 
            placeholder="Celular com DDD" 
            value={phone} 
            onChange={e => setPhone(e.target.value)} 
            required
        />
        <button onClick={sendAddressData}>
            {loading ? 'Cadastrar' : <Loading/>}
        </button>
        </SignContainer>
        }
        </>
}


