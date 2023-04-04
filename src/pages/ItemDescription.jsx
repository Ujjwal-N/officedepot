import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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
  minHeight: "73vh",
};

const Button = styled.button`
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  background-color: #13755ece;
`;

function ItemDescription() {
  const location = useLocation();
  const itemInfo = location.state?.itemInfo;

  //item group
  //stock
  return (
    <div style={leftAlign}>
      <ItemImage src={itemInfo.img} alt={`${itemInfo.name} image placeholder`} />
      <div style={leftAlign}>
        <h1>{itemInfo.name}</h1>
        <hr />
        <h2>Description</h2>
        <p>{itemInfo.description}</p>
        <h2>${itemInfo.price}</h2>
        <p>
          Quantity:
          <select
            name="quantity"
            id="quantity-select"
            style={{ marginLeft: "10px" }}
          >
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
        <p> Item Group: {itemInfo.itemgroup} </p>
        <p> Stock: {itemInfo.stock ? itemInfo.stock : '0 (add stock to DB)'} </p>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
}

export default ItemDescription;
