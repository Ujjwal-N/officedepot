import { React, useState } from "react";
import { Row, Col } from "react-bootstrap";
import UserTextBoxes from "../components/UserTextBoxes";
export const Profile = (userData, setUserData) => {
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "6em", marginLeft: "2rem" }}>
        <Col md={6}>
          <UserTextBoxes
            formData={userData}
            handleChange={handleChange}
            signup={false}
          />
        </Col>
      </Row>
    </div>
  );
};
