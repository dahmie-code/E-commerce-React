import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import user from '../assets/images/user.svg';
import cart from '../assets/images/cart.svg';
import { useCart } from '../hooks/useCart';

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  console.log("Navbar Cart Items:", cartItems);
  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);

  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark" aria-label="Luxe navigation bar">
      <div className="container">
        <a className="navbar-brand" href="/">Luxe<span>.</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
            <li><a className="nav-link" href="/shop">Shop</a></li>
            <li><a className="nav-link" href="/about">About Us</a></li>
            <li><a className="nav-link" href="/services">Services</a></li>
            <li><a className="nav-link" href="/blog">Blog</a></li>
            <li><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li><a className="nav-link" href="#"><img src={user} alt="User"/></a></li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <img src={cart} alt="Cart" className="cart-icon" />
                {totalItems > 0 && (
                  <span className="cart-count">{totalItems}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
