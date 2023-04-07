import React from "react";
import hammer from "../Images/hammer.jpg";
import chair from "../Images/chair.jpg";
import { images } from "../productImageNames.js";
import { Button } from "react-bootstrap";
function CheckoutListItem({ item, cart, setCart }) {
  const imageItem = images.find((element) => element.name === item.image);
  const options = Array.from({ length: item.stock }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ));
  const handleSelectChange = (event) => {
    const updatedCart = cart.map((currentItem) => {
      if (currentItem.inventory_id === item.inventory_id) {
        return {
          ...currentItem,
          quantity: parseInt(event.target.value),
        };
      }
      return currentItem;
    });
    setCart(updatedCart);
  };
  const handleDelete = (event) => {
    setCart((prevData) =>
      prevData.filter((cartItem) => cartItem.inventory_id !== item.inventory_id)
    );
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "10px",
        height: "25vh",
        overflow: "hidden",
        textAlign: "right",
      }}
    >
      <img
        src={imageItem ? imageItem.src : ""}
        alt={item.name}
        style={{
          maxWidth: "50%",
          marginRight: "1rem",
          height: "100%",
          border: "1px solid black",
        }}
      />
      <div
        style={{
          flex: "1",
          height: "100%",
          overflow: "hidden",
          marginRight: "10px",
        }}
      >
        <h3>{item.name}</h3>
        <p>
          Quantity:
          <select
            style={{ marginLeft: "10px" }}
            value={item.quantity}
            onChange={handleSelectChange}
          >
            {options}
          </select>
        </p>
        <p>Price: ${item.price}</p>
        <Button variant="danger" onClick={handleDelete}>
          {" "}
          Remove{" "}
        </Button>
      </div>
    </div>
  );
}

export default CheckoutListItem;
