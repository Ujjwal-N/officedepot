import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutListItem from "../components/CheckoutListItem";
import CartTotal from "../components/CartTotal";

function Cart({ cart, setCart, userData }) {
  return (
    <div style={{ padding: "10px ", minHeight: "77vh" }}>
      <h1>Cart</h1>
      <div>
        <Row
          style={{ marginTop: "3em", marginLeft: "2rem", marginBottom: "3em" }}
        >
          <Col md="8">
            <h4 style={{ textAlign: "left" }}>Item(s)</h4>
            {cart.map((cartItem, index) => (
              <CheckoutListItem
                key={index}
                item={cartItem}
                cart={cart}
                setCart={setCart}
                canEdit={true}
              />
            ))}
          </Col>
          <Col md="4">
            <CartTotal cart={cart} />
          </Col>
        </Row>
        <br />
      </div>
      <hr />
      {userData.name ? (
        <Button
          variant="outline-primary"
          as={Link}
          to={"/checkout"}
          hidden={cart.length == 0}
        >
          Proceed to checkout
        </Button>
      ) : (
        "You must be signed in to place an order"
      )}
    </div>
  );
}

export default Cart;
