import React from "react";

const Cart = ({ cartItems, removeItem }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeItem(item)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;


