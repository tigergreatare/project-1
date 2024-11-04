export default function CartContainer({ cart, clearCart, removeItem }) {
  return (
    <div
      style={{
        width: "300px",
        padding: "10px",
        borderLeft: "1px solid #ccc",
      }}
    >
      <h2>Selected Items</h2>

      <button onClick={clearCart} style={{ marginBottom: "10px", color: "red" }}>
        Empty Cart
      </button>

      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cart.map((item) => (
          <div key={`${item.productName}-${item.id}`} className="CartCard">
           
            <h4>{item.productName}</h4>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button
              onClick={() => removeItem(item.id)}
              className="RemoveButton" 
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}








