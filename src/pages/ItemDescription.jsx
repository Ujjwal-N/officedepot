import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { images } from "../productImageNames.js";
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

function ItemDescription({ cart, setCart }) {
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
            value={cartValue}
            onChange={handleSelectChange}
            disabled={itemInfo.stock === 0}
          >
            {options}
          </select>
        </p>
        <p> Item Group: {itemInfo.itemgroup} </p>
        <p>
          {" "}
          Stock: {itemInfo.stock ? itemInfo.stock : "0 (add stock to DB)"}{" "}
        </p>
        <p>
          {inventoryRemaining
            ? ""
            : "Based on your current order and our current stock, there is no inventory remaining."}
        </p>
        <Button
          onClick={() => {
            let found = false;
            const updatedCart = cart.map((currentItem) => {
              if (currentItem.inventory_id === itemInfo.inventory_id) {
                found = true;
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
            } else {
              setCart(updatedCart);
            }
            setInventoryRemaining(inventoryRemaining - cartValue);
          }}
          hidden={inventoryRemaining == 0}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ItemDescription;
