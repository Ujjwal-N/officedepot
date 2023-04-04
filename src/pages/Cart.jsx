import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutListItem from "../components/CheckoutListItem";
import CartTotal from "../components/CartTotal";

function Cart() {
  return (
    <div style={{ padding: "10px ", minHeight: "77vh" }}>
      <h1>Cart</h1>

      <div>
        <CartTotal />
        <h4 style={{ textAlign: "left" }}>Item(s)</h4>
        <CheckoutListItem
          item={{
            name: "Hammer",
            price: "19.99",
          }}
        />
        <br />
        <CheckoutListItem
          item={{
            name: "Chair",
            price: "30.00",
          }}
        />
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
