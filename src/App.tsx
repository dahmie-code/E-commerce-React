import Home from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Shop from './components/Shop';
import { CartProvider } from './context/CartContext'; 
import './styles/main.scss';
import Navbar from './components/Navbar';
import About from './components/About';


function App() {


  return (
    <>
      <Router>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element ={<About />} />
          </Routes>
        </CartProvider>
</Router>

      
</>
  )
}

export default App
