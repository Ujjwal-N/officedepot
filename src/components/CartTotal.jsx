import React from "react";

function CartTotal({ cart }) {
  const subtotal = cart
    ? cart.reduce((sum, currentItem) => {
        return sum + currentItem.quantity * currentItem.price;
      }, 0)
    : 0;
  const taxes = 0.09 * subtotal;
  const total = subtotal + taxes;
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
        <strong>Total Items:</strong>{" "}
        {cart
          ? cart.reduce((sum, currentItem) => {
              return sum + currentItem.quantity;
            }, 0)
          : 0}
      </p>
      <p>
        <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
      </p>
      <p>
        <strong>Shipping and handling:</strong> on next screen
      </p>
      <p>
        <strong>Tax:</strong> ${taxes.toFixed(2)}
      </p>
      <hr />
      <h5>
        <strong>Total(without shipping):</strong> ${total.toFixed(2)}
      </h5>
    </div>
  );
}

export default CartTotal;
