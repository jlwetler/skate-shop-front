import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import Category from './components/Category';
import Product from './components/Product';

export default function App() {
  const [product, setProduct] = useState({})
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='categoria/:category' element={<Category setProduct={setProduct} />} />
      <Route path='produto/:product' element={<Product product={product} />} />
      </Routes>
    </Router>
  );
}
