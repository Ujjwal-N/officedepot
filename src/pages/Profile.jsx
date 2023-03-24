import { React, useState } from "react";
import { Row, Col } from "react-bootstrap";
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
    <div>
      <Row style={{ marginTop: "3em", marginLeft: "2rem" }}>
        <Col md={6}>
          <h2> Edit User Data</h2>
          <UserTextBoxes
            formData={userData}
            handleChange={handleChange}
            signup={false}
            handleSubmit={handleSubmit}
          />
        </Col>
        <Col md={6}>
          <h2> Past Orders</h2>
          <ul>
            {orderData.map((item) => (
              <>
                <li>Order #{item.number}</li>

                {item.items.map((orderItem) => {
                  return <li>{orderItem}</li>;
                })}
                <li>Status: {item.status}</li>
                <li>Total: {item.total}</li>
                <br></br>
              </>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};
