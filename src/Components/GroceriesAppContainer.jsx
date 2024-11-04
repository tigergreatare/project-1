import { useState } from "react";
import Navbar from "./Navbar";
import products from "../data/products";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";
import "../app.css";

export default function GroceriesAppContainer() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ProductContainer products={products} addToCart={addToCart} />
        <CartContainer cart={cart} clearCart={clearCart} removeItem={removeItem} />
      </div>
    </div>
  );
}






