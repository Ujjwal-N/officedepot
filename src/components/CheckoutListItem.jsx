import React from "react";
import hammer from "../Images/hammer.jpg";
import chair from "../Images/chair.jpg";

function CheckoutListItem({ item }) {
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
        src={item.name == "Hammer" ? hammer : chair}
        alt={item.name}
        style={{
          width: "25%",
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
        <p>Price: ${item.price}</p>
      </div>
    </div>
  );
}

export default CheckoutListItem;
