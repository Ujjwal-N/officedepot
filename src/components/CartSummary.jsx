import React from "react";
import { Row, Col } from "react-bootstrap";
import CheckoutListItem from "./CheckoutListItem";
import CartTotal from "./CartTotal";

function CartSummary({ cart, setCart, isCart }) {
  return (
    <div>
      <Row
        style={{ marginTop: "3em", marginLeft: "2rem", marginBottom: "3em" }}
      >
        <div style={{ textAlign: "left" }}>
          {isCart ? <h4>Item(s)</h4> : <h4>Order Summary</h4>}
        </div>
        <Col md="8">
          <div
            style={{
              overflowY: cart.length > 3 ? "scroll" : "auto",
              maxHeight: "475px",
              border: "5px solid lightgray",
              borderRadius: "20px",
              paddingTop: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {cart.map((cartItem, index) => (
              <CheckoutListItem
                key={index}
                item={cartItem}
                cart={cart}
                setCart={setCart}
                canEdit={isCart}
              />
            ))}
          </div>
        </Col>
        <Col md="4">
          <CartTotal cart={cart} isCart={isCart} />
        </Col>
      </Row>
    </div>
  );
}

export default CartSummary;
