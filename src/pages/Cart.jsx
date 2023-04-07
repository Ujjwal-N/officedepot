import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutListItem from "../components/CheckoutListItem";
import CartTotal from "../components/CartTotal";

function Cart({ cart, setCart }) {
  console.log(cart);
  return (
    <div style={{ padding: "10px ", minHeight: "77vh" }}>
      <h1>Cart</h1>
      <h4 style={{ textAlign: "left" }}>Item(s)</h4>
      <div>
        <CartTotal />
        {cart.map((cartItem, index) => (
          <CheckoutListItem
            key={index}
            item={cartItem}
            cart={cart}
            setCart={setCart}
          />
        ))}
        <br />
      </div>
      <hr />
      <Button variant="outline-primary" as={Link} to={"/checkout"}>
        Proceed to checkout
      </Button>
    </div>
  );
}

export default Cart;
