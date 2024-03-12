import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/products/Products';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
