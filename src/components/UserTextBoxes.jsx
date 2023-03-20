import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import "../css/signup.css";
const UserTextBoxes = ({ handleSubmit, handleChange, formData, signup }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="username" className="pad-here">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={handleChange}
              value={formData.username}
              disabled={!signup}
            />
          </Form.Group>

          <Form.Group controlId="email" className="pad-here">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={formData.email}
            />
          </Form.Group>

          <Form.Group
            controlId="password"
            style={{ marginBottom: "2rem" }}
            className="pad-here"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={formData.password}
              disabled={!signup}
            />
          </Form.Group>

          <Form.Group controlId="address" className="pad-here">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              onChange={handleChange}
              value={formData.address}
            />
          </Form.Group>

          <Row>
            <Col md={7} className="pad-here">
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  onChange={handleChange}
                  value={formData.city}
                />
              </Form.Group>
            </Col>

            <Col md={3} className="pad-here">
              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter state"
                  onChange={handleChange}
                  value={formData.state}
                />
              </Form.Group>
            </Col>

            <Col md={2} className="pad-here">
              <Form.Group controlId="zip">
                <Form.Label>ZIP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter zip code"
                  onChange={handleChange}
                  value={formData.zip}
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>

        <Col>
          <Form.Group controlId="ccNumber" className="pad-here">
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter credit card number"
              onChange={handleChange}
              value={formData.ccNumber}
            />
          </Form.Group>

          <Form.Group controlId="expirationDate" className="pad-here">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter expiration date"
              onChange={handleChange}
              value={formData.expirationDate}
            />
          </Form.Group>

          <Form.Group
            controlId="cvv"
            style={{ marginBottom: "2rem" }}
            className="pad-here"
          >
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter cvv"
              onChange={handleChange}
              value={formData.cvv}
            />
          </Form.Group>

          <Form.Group controlId="billingAddress" className="pad-here">
            <Form.Label>Billing Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter billing address"
              onChange={handleChange}
              value={formData.billingAddress}
            />
          </Form.Group>

          <Row>
            <Col md={7} className="pad-here">
              <Form.Group controlId="billingCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  onChange={handleChange}
                  value={formData.billingCity}
                />
              </Form.Group>
            </Col>

            <Col md={3} className="pad-here">
              <Form.Group controlId="billingState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter state"
                  onChange={handleChange}
                  value={formData.billingState}
                />
              </Form.Group>
            </Col>

            <Col md={2} className="pad-here">
              <Form.Group controlId="billingZip">
                <Form.Label>ZIP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter zip code"
                  onChange={handleChange}
                  value={formData.billingZip}
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      {
        <Button
          variant="primary"
          type="submit"
          size="md"
          style={{ marginTop: "2rem" }}
        >
          {signup ? "Submit" : "Update"}
        </Button>
      }
    </Form>
  );
};

export default UserTextBoxes;
