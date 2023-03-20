import { React, useState } from "react";
import { Row, Col } from "react-bootstrap";
import UserTextBoxes from "./UserTextBoxes";
export const Profile = () => {
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    ccNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    loginUsername: "",
    loginPassword: "",
  });
  return (
    <div>
      <Row style={{ marginTop: "6em", marginLeft: "2rem" }}>
        <Col md={6}>
          <UserTextBoxes
            formData={formData}
            handleChange={handleChange}
            signup={false}
          />
        </Col>
      </Row>
    </div>
  );
};
