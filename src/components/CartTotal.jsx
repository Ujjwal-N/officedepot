import React from "react";

function CartTotal({ cartItems }) {
  return (
    <div
      style={{
        boxSizing: "50px",
        border: "2px solid rgba(0, 0, 0, 0.05)",
        padding: "50px",
        float: "right",
        marginRight: "50px",
        textAlign: "left",
      }}
    >
      <p>
        <strong>Total Items:</strong> 2
      </p>
      <p>
        <strong>Subtotal:</strong> $19.99
      </p>
      <p>
        <strong>Shipping and handling:</strong> $0.00 (Drone Delivery)
      </p>
      <p>
        <strong>Total before tax:</strong> $19.99
      </p>
      <p>
        <strong>Tax:</strong> $1.80
      </p>
      <hr />
      <h5>
        <strong>Total:</strong> $21.79
      </h5>
    </div>
  );
}

export default CartTotal;
