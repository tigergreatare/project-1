import React from "react";

export default function CartCard({ item, removeFromCart }) {
  return (
    <div className="CartCard">
      <img src={item.image} alt={item.productName} />
      <p>Price: ${item.price}</p>
    </div>
  );
}





