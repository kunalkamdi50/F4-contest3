import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { removeFromCart, resetCart } from "../redux/actions/cartActions";
import "./MyCart.css";

const MyCart = () => {
    const myCart = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
  
    const handleRemoveFromCart = (product) => {
      dispatch(removeFromCart(product));
    };
  
    const handleCheckout = () => {
      dispatch(resetCart());
      alert('Items have been checked out successfully!');
    };
  
    return (
      <div className="mycartpage">
        <h1>My Cart Page</h1>
        {myCart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {myCart.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="cart-item-details">
                  <h3>{product.title}</h3>
                  <p>Price: Rs{product.price}</p>
                  <button onClick={() => handleRemoveFromCart(product)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="checkout-section">
              <button onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default MyCart;
