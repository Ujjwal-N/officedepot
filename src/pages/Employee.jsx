import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { CREATE_EMPLOYEE_ENDPOINT } from "../constants";
const Employee = () => {
  const [data, setData] = useState([]);
  const [addingRow, setAddingRow] = useState(false);
  const [newRowData, setNewRowData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const addRow = () => {
    setAddingRow(true);
  };

  const saveRow = () => {
    setData([...data, { name: newRowData.name, email: newRowData.email }]);
    const [firstname, lastname] = newRowData.name.split(" ");
    axios
      .post(CREATE_EMPLOYEE_ENDPOINT, {
        firstname: firstname,
        lastname: lastname,
        email: newRowData.email,
        password: newRowData.password,
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setNewRowData({ name: "", email: "", password: "" });
    setAddingRow(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRowData({ ...newRowData, [name]: value });
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee Email</th>
            {addingRow && <th>Password</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.email}</td>
            </tr>
          ))}
          {addingRow && (
            <tr>
              <td>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Employee Name"
                  value={newRowData.name}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Employee Email"
                  value={newRowData.email}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Set Password"
                  value={newRowData.password}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {!addingRow ? (
        <Button onClick={addRow}>Add New Employee</Button>
      ) : (
        <Button onClick={saveRow}>Save</Button>
      )}
    </>
  );
};

export default Employee;
