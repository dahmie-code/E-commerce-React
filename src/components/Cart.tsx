import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./Hero";
import { useCart } from "../hooks/useCart"; 
import '../styles/Cart.scss';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

    useEffect(() => {
        console.log("Cart updated:", cartItems);
      }, [cartItems]);  
    // Calculate the total price
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckOut = () => {

        navigate('/checkout');
      };
    return (
      <>
        <Hero
          title="Cart"
          description="Learn about our story and how we have grown to become a leader in modern interior design."
          button1Text="Continue Shopping"
          button2Text="Explore"
        />
        <div className="before-footer-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="site-blocks-table">
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
                      {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <tr key={item.id}>
                              <td className="product-thumbnail">
                                <img src={item.image} alt={item.name} className="img-fluid" />
                              </td>
                              <td className="product-name">
                                <h2 className="h5 text-black">{item.name}</h2>
                              </td>
                              <td>${item.price.toFixed(2)}</td>
                              <td>
                                <div
                                  className="input-group mb-3 d-flex align-items-center quantity-container"
                                  style={{ maxWidth: "120px" }}
                                >
                                  <div className="input-group-prepend">
                                    <button
                                      className="btn btn-outline-black decrease"
                                      type="button"
                                      onClick={() => decreaseQuantity(item.id)}
                                      disabled={item.quantity === 1}
                                    >
                                      &minus;
                                    </button>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control text-center quantity-amount"
                                    value={item.quantity}
                                    readOnly
                                  />
                                  <div className="input-group-append">
                                    <button
                                      className="btn btn-outline-black increase"
                                      type="button"
                                      onClick={() => increaseQuantity(item.id)}
                                    >
                                      &#43;
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td>${(item.price * item.quantity).toFixed(2)}</td>
                              <td>
                                <button
                                  className="btn btn-black btn-sm"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  X
                                </button>
                              </td>
                            </tr>
                          ))
                        
                      ) : (
                        <tr>
                          <td colSpan={6} className="text-center">No items in the cart</td>
                        </tr>)}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
  
            <div className="row">
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">${subtotal.toFixed(2)}</strong>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">${subtotal.toFixed(2)}</strong>
                      </div>
                    </div>
  
                    <div className="row">
                      <div className="col-md-12">
                        <button className="btn btn-black btn-lg py-3 btn-block" onClick={handleCheckOut}>
                          Proceed To Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default Cart; 