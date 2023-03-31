import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
const Inventory = () => {
  const [data, setData] = useState([]);
  const [addingRow, setAddingRow] = useState(false);
  const [newRowData, setNewRowData] = useState({
    id: "",
    name: "",
    description: "",
    weight: "",
    price: "",
    itemgroup: "",
    stock: "",
  });

  const addRow = () => {
    setAddingRow(true);
  };

  const saveRow = () => {
    setData([...data, newRowData]);
    const { id, ...dataToPass } = newRowData;
    axios
      .post("http://3.133.128.233:5001/createInventory", dataToPass)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(newRowData);
    setNewRowData({
      name: "",
      description: "",
      weight: "",
      price: "",
      itemgroup: "",
      stock: "",
    });
    setAddingRow(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRowData({ ...newRowData, [name]: value });
  };

  const handleEditInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = data.map((row, i) => {
      if (i === index) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setData(updatedData);
  };

  const toggleEdit = (index) => {
    if (data[index].editing) {
      //make call to server
      const { id, editing, ...dataToPass } = data[index];
    }
    setData(
      data.map((row, i) =>
        i === index ? { ...row, editing: !row.editing } : row
      )
    );
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>ID</th>
            <th style={{ width: "15%" }}>Name</th>
            <th style={{ width: "30%" }}>Description</th>
            <th style={{ width: "15%" }}>Item Group</th>
            <th style={{ width: "10%" }}>Weight</th>
            <th style={{ width: "10%" }}>Price</th>
            <th style={{ width: "10%" }}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.entries(row).map(([key, value]) => {
                if (key === "editing") return null;
                return (
                  <td key={key}>
                    {row.editing ? (
                      <Form.Control
                        type="text"
                        name={key}
                        value={value}
                        onChange={(e) => handleEditInputChange(e, index)}
                      />
                    ) : (
                      value
                    )}
                  </td>
                );
              })}
              <td>
                <Button onClick={() => toggleEdit(index)}>
                  {row.editing ? "Save" : "Edit"}
                </Button>
              </td>
            </tr>
          ))}

          {addingRow && (
            <tr>
              <td className="id">
                <Form.Control
                  disabled
                  type="number"
                  name="id"
                  placeholder="ID"
                  value={newRowData.id}
                  onChange={handleInputChange}
                />
              </td>
              <td className="name">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={newRowData.name}
                  onChange={handleInputChange}
                />
              </td>
              <td className="description">
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={newRowData.description}
                  onChange={handleInputChange}
                />
              </td>
              <td className="itemgroup">
                <Form.Control
                  type="text"
                  name="itemgroup"
                  placeholder="Item Group"
                  value={newRowData.itemgroup}
                  onChange={handleInputChange}
                />
              </td>
              <td className="weight">
                <Form.Control
                  type="number"
                  name="weight"
                  placeholder="Weight"
                  value={newRowData.weight}
                  onChange={handleInputChange}
                />
              </td>
              <td className="price">
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={newRowData.price}
                  onChange={handleInputChange}
                />
              </td>
              <td className="stock">
                <Form.Control
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={newRowData.stock}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {!addingRow ? (
        <Button onClick={addRow}>Add Row</Button>
      ) : (
        <Button onClick={saveRow}>Save Row</Button>
      )}
    </>
  );
};

export default Inventory;
