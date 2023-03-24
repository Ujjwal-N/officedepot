import { React, useState } from "react";
import styled from "styled-components";
import hammer from "../Images/hammer.jpg";

const ItemImage = styled.img`
  max-width: 50%;
  max-height: 50%;
  min-width: 10%;
  min-height: 80%;
  width: 500px;
  height: auto;
  border: 5px solid #555;
  float: left;
  margin-right: 50px;
`;

const leftAlign = {
  textAlign: "left",
  margin: "30px",
};

const Button = styled.button`
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  background-color: #13755ece;
`;

function ItemDescription({ item }) {
  return (
    <div style={leftAlign}>
      {/* <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <h2>{item.price}</h2>
            <button>Add to Cart</button> */}
      <ItemImage src={hammer} alt={"Item"} />
      <div style={leftAlign}>
        <h1>Hammer</h1>
        <hr />
        <h2>Description</h2>
        <ul>
          <li>
            This thing will nail it! You know cause, it will help you smack down
            nails.
          </li>
          <li>
            It's a pretty... handy tool. Cause you use it with your hand and
            stuff.
          </li>
          <li>
            Anyways, this is a great purchase because it's an absolute...
            banger!
          </li>
          <li>Personally recommended by Bob the Builder.</li>
        </ul>
        <h2>$19.99</h2>
        <p>
          Quantity:
          <select name="quantity" id="quantity-select">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
          </select>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemDescription;
