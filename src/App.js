import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Category from './components/Category';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categoria/:name' element={<Category />} />
      </Routes>
    </Router>
  );
}
