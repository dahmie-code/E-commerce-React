import Home from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Shop from './components/Shop';
import { CartProvider } from './context/CartContext'; 
import './styles/main.scss';
import Navbar from './components/Navbar';
import About from './components/About';
import Service from './components/Service';
import BlogPage from './components/BlogPage';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import Thankyou from './components/Thankyou';


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
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thankyou" element={<Thankyou />} />

          </Routes>
        </CartProvider>
</Router>

      
</>
  )
}

export default App
