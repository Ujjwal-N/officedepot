import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import CartSummary from "../components/CartSummary";

function CheckoutPage({ cart, setCart, userData }) {
  return (
    <div style={{ padding: "10px", minHeight: "78vh" }}>
      <h1>Checkout</h1>
      <div>
        <CartSummary
          cart={cart}
          setCart={setCart}
          isCart={false}
        ></CartSummary>
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
              {userData.name} <br />
              {userData.address}, {userData.city}, {userData.state},{" "}
              {userData.zip}
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between-align-items-start"
          >
            <div className="ms-2 me-auto" style={{ textAlign: "left" }}>
              <div className="fw-bold">Payment Method</div>
              Credit card ending in {parseInt(userData.ccNumber) % 10000}
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between-align-items-start"
          >
            <div className="ms-2 me-auto" style={{ textAlign: "left" }}>
              <div className="fw-bold">Billing Address</div>
              {userData.billingAddress}, {userData.billingCity},{" "}
              {userData.billingState}, {userData.billingZip}
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


function totalFee(orderFee, orderWeight, droneRequest, truckRequest) {
  let surchargeFee = 0
  let shippingDuration = 2;
  let droneDelivery = false; 
  let truckDelivery = false;
  let feeWithShipping;
  let totalAmount;
 

  if(orderFee >= 100) {
    
    if(orderWeight < 15) {
      droneDelivery = true;
      shippingDuration = 1;
    } 
    else {
      truckDelivery = true;

      if(truckRequest) {  //same day truck delivery request
        shippingDuration = 1;
        surchargeFee += 25;
      }
    }
  } 
  else {  //if orderFee < 100
    truckDelivery = true;

    if(truckRequest || droneRequest) {
      shippingDuration = 1;
      surchargeFee += 20;
    }
  }

    feeWithShipping = orderFee + surchargeFee;
    let tax = 0.09 * feeWithShipping;
    totalAmount = feeWithShipping + tax;
    totalAmount = totalAmount.toFixed(2);
    
    return totalAmount 
  }

export default CheckoutPage;
