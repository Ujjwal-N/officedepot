import React from "react";
import { useLocation } from "react-router-dom";
export const Shipping = () => {
  const location = useLocation();
  const { shippingMethod, warehouse } = location.state;
  return (
    <div>
      {shippingMethod}, {warehouse}
    </div>
  );
};

export default Shipping;
