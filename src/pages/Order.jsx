import React from "react";
import { useEffect } from "react";
import { GET_ALL_ORDERS_ENDPOINT } from "../constants";
import axios from "axios";
export const Order = () => {
  useEffect(() => {
    axios
      .get(GET_ALL_ORDERS_ENDPOINT)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Order</h1>
    </div>
  );
};

export default Order;
