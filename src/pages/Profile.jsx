import { React, useState } from "react";
import { Row, Col, ListGroup, Badge } from "react-bootstrap";
import UserTextBoxes from "../components/UserTextBoxes";
export const Profile = ({ userData, setUserData }) => {
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
    console.log(userData);
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
