import React, { useState } from "react";
import UserTextBoxes from "../components/UserTextBoxes";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import hammer from "../Images/hammer.jpg";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import CheckoutListItem from "../components/CheckoutListItem";
import CartTotal from "../components/CartTotal";

function CheckoutPage() {
  return (
    <div style={{ padding: "10px", minHeight: "78vh" }}>
      <h1>Checkout</h1>
      <h3 style={{ textAlign: "left" }}>Order Summary</h3>
      <div>
        <CartTotal />
        <CheckoutListItem
          item={{
            name: "Hammer",
            price: "19.99",
          }}
        />
      </div>

      <div style={{ clear: "both" }}>
        <hr />
        <h3 style={{ textAlign: "left" }}>Review Order Details</h3>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between-align-items-start"
          >
            <div className="ms-2 me-auto" style={{ textAlign: "left" }}>
              <div className="fw-bold">Shipping Address</div>
              FirstName LastName <br />
              21 Jump Street, City, State, ZIP, Country
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between-align-items-start"
          >
            <div className="ms-2 me-auto" style={{ textAlign: "left" }}>
              <div className="fw-bold">Payment Method</div>
              VISA ending in 1234
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between-align-items-start"
          >
            <div className="ms-2 me-auto" style={{ textAlign: "left" }}>
              <div className="fw-bold">Billing Address</div>
              Same as shipping
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div style={{ clear: "both" }}>
        <Button
          variant="primary"
          type="submit"
          size="md"
          style={{ marginTop: "2rem" }}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
}

export default CheckoutPage;
