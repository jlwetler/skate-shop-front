import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import Category from './components/Category';
import Product from './components/Product';
import Cart from './components/Cart';
import UserContext from './contexts/UserContext';
import CartContext from './contexts/CartContext';

export default function App() {
  const [product, setProduct] = useState({});
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);

  return <>
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='categoria/:category' element={<Category setProduct={setProduct} />} />
            <Route path='produto/:product' element={<Product product={product} />} />
            <Route path='carrinho' element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </UserContext.Provider>      
    </Router>
  </>;
}
