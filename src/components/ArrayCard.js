import React, { useEffect, useState } from "react";
import ProductsArray from "../pages/ProductsArray";
import "../styles/products.css";
import Cart from "../components/Cart";

const ArrayCard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sort, setSort] = useState("");

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeItem(item) {
    const newCart = cart.filter((product) => product.id !== item.id);
    setCart(newCart);
  }

  useEffect(() => {
    setProducts(ProductsArray);
  }, []);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const sortedProducts = products.sort((a, b) => {
    if (sort === "title") {
      return a.title.localeCompare(b.title);
    } else if (sort === "price") {
      return a.price - b.price;
    } else {
      return 0;
    }
  });

  return (
    <div className="container">
      <h1>Products Page</h1>
      <div className="filter">
        <span>Sort by:</span>
        <select value={sort} onChange={handleSortChange}>
          <option value="">Select an option</option>
          <option value="title">Name(A-Z)</option>
          <option value="price">Price(Low to High)</option>
        </select>
      </div>
      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <span className="product-price">${product.price}</span>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="product-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Cart cartItems={cart} removeItem={removeItem} />
    </div>
  );
};

export default ArrayCard; 
