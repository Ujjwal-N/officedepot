import React from "react";
import { Slider } from "../components/Slider";
import { Deliveryinfo } from "../components/Deliveryinfo";
import ResetScrollPos from "../components/ResetScrollPos";

export const Home = () => {
  return (
    <div>
      <Slider />
      <Deliveryinfo />
      <p style={{ margin: "80px" }}></p>
      <ResetScrollPos />
    </div>
  );
};

export default Home;
