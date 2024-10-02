
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { useCart } from "../hooks/useCart"; 

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
          <Hero title="Cart"
              description="Your selected items."
                      button1Text="Continue Shopping"
        button2Text="Explore"
          />
      <div className="before-footer-section">
        <div className="container">
          {cartItems.length > 0 ? (
            <div className="row mb-5">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="product-thumbnail">
                          <img src={item.image} alt={item.name} className="img-fluid" />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">{item.name}</h2>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                          <button onClick={() => decreaseQuantity(item.id)}>-</button>
                          {item.quantity}
                          <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button onClick={() => removeFromCart(item.id)}>X</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>No items in the cart</div>
          )}
          <div>
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
