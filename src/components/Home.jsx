import React from "react";
import { Slider } from "./Slider";
import { Deliveryinfo } from "./Deliveryinfo";
import { Homeproducts } from "./Homeproducts";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div>
      <Slider />
      <Deliveryinfo />
      <p style={{ margin: "100px" }}></p>
      <h1 style={{ marginTop: "20px" }}>PREVIEW OUR ITEMS</h1>
      <Homeproducts />
    </div>
  );
};

export default Home;
