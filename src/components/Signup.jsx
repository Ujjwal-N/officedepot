import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import '../css/signup.css';

export const Signup = () => {
  const [showLogin, setShowLogin] = useState(false); // state to toggle between sign up and log in
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    ccNumber: '',
    expirationDate: '',
    cvv: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    loginEmail: '',
    loginPassword: ''
  });

  const toggleLogin = () => setShowLogin(!showLogin); // function to toggle between sign up and log in

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signup-pad">
    <div className="signup-container">
    <Form onSubmit={handleSubmit}>
      {!showLogin && (<Row>
        <Col>
          <Form.Group controlId="name" className="pad-here">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="email" className="pad-here">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="password" style={{ marginBottom: '2rem' }} className="pad-here">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="address" className="pad-here">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" onChange={handleChange}/>
          </Form.Group>

          <Row>
            <Col md={7} className="pad-here">
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" onChange={handleChange}/>
              </Form.Group>
            </Col>

            <Col md={3} className="pad-here">
              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="Enter state" onChange={handleChange}/>
              </Form.Group>
            </Col>

            <Col md={2} className="pad-here">
              <Form.Group controlId="zip">
                <Form.Label>ZIP</Form.Label>
                <Form.Control type="text" placeholder="Enter zip code" onChange={handleChange}/>
              </Form.Group>
            </Col>
          </Row>
        </Col>

        <Col>
          <Form.Group controlId="ccNumber" className="pad-here">
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control type="text" placeholder="Enter credit card number" onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="expirationDate" className="pad-here">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control type="text" placeholder="Enter expiration date" onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="cvv" style={{ marginBottom: '2rem' }} className="pad-here">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="text" placeholder="Enter cvv" onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="billingAddress" className="pad-here">
            <Form.Label>Billing Address</Form.Label>
            <Form.Control type="text" placeholder="Enter billing address" onChange={handleChange}/>
          </Form.Group>

          <Row>
            <Col md={7} className="pad-here">
              <Form.Group controlId="billingCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" onChange={handleChange}/>
              </Form.Group>
            </Col>

            <Col md={3} className="pad-here">
              <Form.Group controlId="billingState">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="Enter state" onChange={handleChange}/>
              </Form.Group>
            </Col>

            <Col md={2} className="pad-here">
              <Form.Group controlId="billingZip">
                <Form.Label>ZIP</Form.Label>
                <Form.Control type="text" placeholder="Enter zip code" onChange={handleChange}/>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>)}
      {
      !showLogin && (<Button variant="primary" type="submit" size="md" style={{ marginTop: '2rem' }}>
        Submit
      </Button>)
      }
      <p onClick={toggleLogin} style={{ cursor: 'pointer', marginTop: '10px' }}>
            {showLogin ? "I don't have an account!" : "Or, log in instead"}
      </p>

      <Col>
          {showLogin && (
            <div>
              <Form.Group controlId="loginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleChange}/>
              </Form.Group>

              <Form.Group controlId="loginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" onChange={handleChange}/>
              </Form.Group>

              <Button variant="primary" type="submit" size="md" style={{ marginTop: '2rem' }}>
                Log In
              </Button>
            </div>
          )}
        </Col>

    </Form>
    </div>
    </div>
  );
};

export default Signup;
