import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";
import axios from "axios";
import UserTextBoxes from "./UserTextBoxes";

export const Signup = ({ userData, setUserData }) => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false); // state to toggle between sign up and log in
  const toggleLogin = () => setShowLogin(!showLogin); // function to toggle between sign up and log in

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!showLogin) {
      const { name, email, password, address, city, state, zip, ccNumber } =
        this.userData;
      const [firstname, lastname] = name.split(" ");
      const shippingaddress = address + "\n" + city + "\n" + state + "\n" + zip;
      //{ firstname, lastname, email, password, shippingaddress, creditcard }
      axios
        .post("http://3.133.128.233:5001/register", {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          shippingaddress: shippingaddress,
          creditcard: ccNumber,
        })
        .then((response) => {
          console.log(response.status);
          console.log(response.data);
          navigate("/home", { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const { loginEmail, loginPassword } = userData;
      console.log(loginEmail, loginPassword);
      axios
        .post("http://3.133.128.233:5001/login", {
          email: loginEmail,
          password: loginPassword,
        })
        .then((response) => {
          console.log(response.data);
          //setName(loginUsername); should be setUserData
          navigate("/home", { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="signup-pad">
      <div
        className="signup-container"
        style={{ display: "flex", flexFlow: "column" }}
      >
        {!showLogin && (
          <UserTextBoxes
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={userData}
            signup={true}
          />
        )}

        <p
          onClick={toggleLogin}
          style={{
            cursor: "pointer",
            marginTop: "10px",
            display: "block",
          }}
        >
          {showLogin ? "I don't have an account!" : "Or, log in instead"}
        </p>

        <Form onSubmit={handleSubmit}>
          <Col>
            {showLogin && (
              <div>
                <Form.Group controlId="loginEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Email"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="loginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  size="md"
                  style={{ marginTop: "2rem" }}
                >
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
