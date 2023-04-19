import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { images } from "../productImageNames.js";
import axios from "axios";
import {
  ADD_ITEM_TO_CART_ENDPOINT,
  UPDATE_CART_ITEM_QUANTITY_ENDPOINT,
} from "../constants";
import ResetScrollPos from "../components/ResetScrollPos.jsx";
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
  padding: 5px 5px;
  &:hover {
    background-color: #0e5d8f; 
  }
`;


function ItemDescription({ cart, setCart, userData }) {
  const location = useLocation();
  const itemInfo = location.state?.itemInfo;
  const imageItem = images.find((element) => element.name === itemInfo.image);
  const [cartValue, setCartValue] = useState(1);
  const inCart = cart.find(
    (element) => element.inventory_id === itemInfo.inventory_id
  );
  const earlierQuantity = inCart ? inCart.quantity : 0;
  const [inventoryRemaining, setInventoryRemaining] = useState(
    itemInfo.stock - earlierQuantity
  );

  const handleSelectChange = (event) => {
    setCartValue(event.target.value);
  };
  const options = Array.from({ length: inventoryRemaining }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ));
  //item group
  //stock
  console.log(itemInfo.stock);
  return (
    <div style={leftAlign}>
      <ItemImage
        src={imageItem ? imageItem.src : ""}
        alt={`${itemInfo.name} image placeholder`}
      />
      <div style={leftAlign}>
        <h1>{itemInfo.name}</h1>
        <h2>Description</h2>
        <p>{itemInfo.description}</p>
        <h2>${itemInfo.price}</h2>
        <p>
          Quantity:
          <select
            name="quantity"
            id="quantity-select"
            style={{ marginLeft: "10px" }}
            value={cartValue}
            onChange={handleSelectChange}
            disabled={itemInfo.stock === 0}
          >
            {options}
          </select>
        </p>
        <p> Item Group: {itemInfo.itemgroup} </p>
        <p> Stock: {itemInfo.stock} </p>
        <p>
          {inventoryRemaining
            ? ""
            : "Based on your current order and our current stock, there is no inventory remaining."}
        </p>
        <Button
          onClick={() => {
            let found = false;
            let oldQuantity = 0;
            const updatedCart = cart.map((currentItem) => {
              if (currentItem.inventory_id === itemInfo.inventory_id) {
                found = true;
                oldQuantity = parseInt(currentItem.quantity);
                return {
                  ...currentItem,
                  quantity:
                    parseInt(currentItem.quantity) + parseInt(cartValue),
                };
              }
              return currentItem;
            });
            if (!found) {
              const cartItem = { ...itemInfo, quantity: parseInt(cartValue) };
              setCart((prevState) => [...prevState, cartItem]);
              if (userData.customer_id) {
                axios
                  .post(ADD_ITEM_TO_CART_ENDPOINT, {
                    customer_id: userData.customer_id,
                    inventory_id: itemInfo.inventory_id,
                    quantity: cartValue,
                  })
                  .then((response) => {
                    console.log(response.status);
                    console.log(response.data);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            } else {
              setCart(updatedCart);
              if (userData.customer_id) {
                axios
                  .put(UPDATE_CART_ITEM_QUANTITY_ENDPOINT, {
                    customer_id: userData.customer_id,
                    inventory_id: itemInfo.inventory_id,
                    newQuantity: oldQuantity + parseInt(cartValue),
                  })
                  .then((response) => {
                    console.log(response.status);
                    console.log(response.data);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            }
            setInventoryRemaining(inventoryRemaining - cartValue);
          }}
          hidden={inventoryRemaining == 0}
        >
          Add to Cart
        </Button>
      </div>
      <ResetScrollPos />
    </div>
  );
}

export default ItemDescription;
