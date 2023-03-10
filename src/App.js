import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import Login from  './components/Login';
import StoreContent from './components/StoreContent';
import Product from './components/Product';
import Cart from './components/Cart';
import Search from './components/Search';
import UserContext from './contexts/UserContext';
import CartContext from './contexts/CartContext';
import ProductContext from './contexts/ProductContext';
import UserAccount from './components/UserAccount';

export default function App() {
  const [product, setProduct] = useState({});
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);

  return <>
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <ProductContext.Provider value={{ product, setProduct }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='user' element={<UserAccount />} />
              <Route path='categoria/:category' element={<StoreContent />} />
              <Route path='produto/:product' element={<Product />} />
              <Route path='carrinho' element={<Cart />} />
              <Route path='search/:search' element={<Search />} />
            </Routes>
          </ProductContext.Provider>
        </CartContext.Provider>
      </UserContext.Provider>      
    </Router>
  </>;
}
