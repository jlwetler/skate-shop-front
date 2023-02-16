import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import UserContext from "../contexts/UserContext";
import { GoListUnordered } from "react-icons/go";

export default function MyAccount() {
    const { user } = useContext(UserContext);
    const [orders, setOrders] = useState([]); 
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    useEffect(()=> {
        axios.get('http://localhost:4000/get-orders', config)
        .then(response => {
            setOrders(response.data);
        })
    }, [])

    console.log(orders);

  return <>
      <section>
        <header>
          <GoListUnordered /> Meus pedidos
        </header>
        <div>
          <div>
            <h1>Dados do pedido</h1>
            <p>Situação: Pedido enviado</p>
            <p>Email: {user.email}</p>
            <p>Celular: {user.phone}</p>
          </div>
          <div>
            <h1>Endereço de entrega</h1>
            <p>Destinatário: {user.name} {user.lastName}</p>
            <p>
              Endereço: {user.street}, {user.district}, {user.city}
            </p>
            <p>CEP: {user.cep}</p>
          </div>
        </div>
        
            {orders.map(order =>
                <>
                    <h2>Itens do pedido #00{order.id}</h2>
                    <div>
                        <div className="order-items">
                            <span className="description">
                                <span className="product">Produto</span>
                                <span className="quantity">Preço</span>
                                <span className="quantity">Quantidade</span>
                                <span className="subtotal">Subtotal</span>
                            </span>
                                <ul>
                                    {order.products.map(p =>  
                                        <li>
                                            <nav className="product">
                                                {p.name}
                                            </nav>
                                            <nav className="quantity">
                                                R$ {(p.paidPrice/100).toFixed(2)}
                                            </nav>
                                            <nav className="quantity">
                                                {p.amount}
                                            </nav>
                                            <nav className="subtotal">
                                                R$ {(p.paidPrice*p.amount/100).toFixed(2)}
                                            </nav>
                                        </li> 
                                    )}
                                    <div className="total">
                                        Total: R$ {(order.totalPrice/100).toFixed(2)}
                                    </div>  
                                </ul>
                                 
                        </div>                 
                    </div>
                    
                </>
            )}
          
      </section>
    </>

}
