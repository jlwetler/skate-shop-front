import {  useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { FaUserCircle } from "react-icons/fa";

export default function MyAccount() {
    const { user } = useContext(UserContext);

    return (
      <>
        <section>
          <header>
            <FaUserCircle /> Minha conta
          </header>
          <div>
            <div>
              <h1>Dados cadastrais</h1>
              <p>
                Nome: {user.name} {user.lastName}
              </p>
              <p>Email: {user.email}</p>
              <p>Celular: {user.phone}</p>
            </div>
            <div>
              <h1>Endereço de entrega</h1>
              <p>Endereço: {user.street}</p>
              <p>CEP: {user.cep}</p>
              <p>Bairro: {user.district}</p>
              <p>Cidade/UF: {user.city}</p>
            </div>
          </div>
        </section>
      </>
    );
}