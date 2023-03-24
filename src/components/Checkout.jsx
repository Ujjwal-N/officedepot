import React, { useState } from "react";
import UserTextBoxes from "./UserTextBoxes";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import hammer from "../Images/hammer.jpg";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function CheckoutPage() {
  return (
    <div style={{ padding: "10px" }}>
      <h1>Checkout</h1>
      <h3 style={{ textAlign: "left" }}>Order Summary</h3>
      <div
        style={{
          marginLeft: "50px",
          float: "left",
          marginBottom: "50px",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={hammer} />
          <Card.Body>
            <Card.Title>Hammer</Card.Title>
            <Card.Text>Hammer Time</Card.Text>
            <Card.Text>
              <strong>Price: </strong> $19.99
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
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
