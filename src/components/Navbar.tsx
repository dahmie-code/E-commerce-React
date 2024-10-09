import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';
import user from '../assets/images/user.svg';
import cart from '../assets/images/cart.svg';
import { useCart } from '../hooks/useCart';

const Navbar: React.FC = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);

  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark" aria-label="Luxe navigation bar">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Luxe<span>.</span></NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarsFurni" 
          aria-controls="navbarsFurni" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/shop">Shop</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About Us</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/services">Services</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/blog">Blog</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact</NavLink></li>
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li className="nav-item"><NavLink className="nav-NavLink" to="#"><img src={user} alt="User" /></NavLink></li>
            <li className="nav-item">
              <NavLink className="nav-NavLink" to="/cart">
                <img src={cart} alt="Cart" className="cart-icon" />
                {totalItems > 0 && (
                  <span className="cart-count">{totalItems}</span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
