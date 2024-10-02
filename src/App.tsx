// import Home from './components/HomePage';
import Shop from './components/Shop';
import { CartProvider } from './context/CartContext'; 
import './styles/main.scss';


function App() {


  return (
    <>
      {/* <Home /> */}
      <CartProvider>
        <Shop/>
      </CartProvider>
      
</>
  )
}

export default App
