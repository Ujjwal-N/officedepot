import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import hammer from "../Images/hammer.jpg";
import chair from "../Images/chair.jpg";

function Cart() {
  return (
    <div style={{ padding: "10px ", minHeight: "77vh" }}>
      <h1>Cart</h1>

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

      <div>
        <h4 style={{ textAlign: "left" }}>Item(s)</h4>
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

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={chair} />
          <Card.Body>
            <Card.Title>Chair</Card.Title>
            <Card.Text>Sit down</Card.Text>
            <Card.Text>
              <strong>Price: </strong> $49.99
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <hr />
      <Button variant="outline-primary" as={Link} to={"/checkout"}>
        Proceed to checkout
      </Button>
    </div>
  );
}

export default Cart;
