import { React, useState } from "react";
import { Row, Col, ListGroup, Badge, Alert } from "react-bootstrap";
import UserTextBoxes from "../components/UserTextBoxes";
import axios from "axios";
import { UPDATE_CUSTOMER_ENDPOINT } from "../constants";
export const Profile = ({ userData, setUserData }) => {
  const [showSuccessAlert, setShowAlert] = useState(false);
  const orderData = [
    {
      number: "1",
      items: ["Chair", "Screw Driver"],
      status: "Shipped",
      total: "$150.95",
    },
    {
      number: "2",
      items: ["Office Desk"],
      status: "Shipped",
      total: "$100.95",
    },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, address, city, state, zip, ccNumber } = userData;
    const [firstname, lastname] = name.split(" ");
    const shippingaddress = address + "\n" + city + "\n" + state + "\n" + zip;
    //{ firstname, lastname, email, password, shippingaddress, creditcard }
    console.log({
      firstname: firstname,
      lastname: lastname,
      shippingaddress: shippingaddress,
      creditcard: ccNumber,
    });
    axios
      .put(UPDATE_CUSTOMER_ENDPOINT + email, {
        firstname: firstname,
        lastname: lastname,
        shippingaddress: shippingaddress,
        creditcard: ccNumber,
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setShowAlert(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div style={{ minHeight: "73vh" }}>
      <Row
        style={{ marginTop: "3em", marginLeft: "2rem", marginBottom: "3em" }}
      >
        <Col md={7}>
          <h2> Edit User Data</h2>
          <UserTextBoxes
            formData={userData}
            handleChange={handleChange}
            signup={false}
            handleSubmit={handleSubmit}
          />
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
            show={showSuccessAlert}
          >
            User profile successfully updated!
          </Alert>
        </Col>
        <Col md={5}>
          <h2> Past Orders</h2>
          <ListGroup as="ol" style={{ marginRight: "5px" }}>
            {orderData.map((item) => (
              <>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto" style={{ textAlign: "left" }}>
                    <div className="fw-bold">Order #{item.number}</div>
                    <div>
                      <ul>
                        {item.items.map((orderItem) => {
                          return <li>{orderItem}</li>;
                        })}
                      </ul>
                      Status: {item.status}
                      <br></br>
                      Total: {item.total}
                    </div>
                  </div>
                  <Badge bg="primary" pill>
                    {item.items.length}
                  </Badge>
                </ListGroup.Item>
              </>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};
