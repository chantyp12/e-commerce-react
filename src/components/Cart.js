import React from "react";

const Cart = ({ cartItems, removeItem }) => {
  // Calculate the total price of the items in the cart:
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {/* Display a message if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        // Render the cart items and total price if there are items in the cart
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
              {/* Remove the item from the cart when the "Remove" button is clicked */}
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



