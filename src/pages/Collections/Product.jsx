import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { Inventoryproducts } from "../../components/Inventoryproducts";
import ResetScrollPos from "../../components/ResetScrollPos";

const Title = styled.h1`
  margin-top: 20px;
  text-transform: capitalize;
`;

export const Product = ({ cart, setCart, userData }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemgroup = searchParams.get("itemgroup");
  const itemProps = location.state?.itemProps;
  console.log(itemProps);

  const navigate = useNavigate();

  useEffect(() => {
    if (itemProps === null || typeof itemProps === 'undefined') {
      navigate('/products');
    }
  }, [itemProps])

  return (
    <div>
      <Title>
        {itemgroup
          ? itemgroup.charAt(0).toUpperCase() + itemgroup.slice(1).toLowerCase()
          : "Chairs"}
      </Title>

      <div>
        <Inventoryproducts
          itemProps={itemProps}
          cart={cart}
          setCart={setCart}
          userData={userData}
        />
      </div>
      <ResetScrollPos />
    </div>
  );
};
