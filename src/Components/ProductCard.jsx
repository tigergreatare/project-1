import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

export default function ProductCard({ productName, price, image, addToCart, id }) {
  const [counter, setCounter] = useState(0);

  
  const handleAddToCart = () => {
    if (counter > 0) {
      addToCart({ id, productName, price }, counter); 
    } else {
      alert("Please select something ");
    }
  };

  return (
    <div className="ProductCard">
      <img src={image} alt="" width="50px" />
      <h3>{productName}</h3>
      <p>Price: {price}</p>
      <div className="ProductQuantityDiv">
        <QuantityCounter counter={counter} setCounter={setCounter} />
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
