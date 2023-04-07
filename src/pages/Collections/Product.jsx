import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Inventoryproducts } from "../../components/Inventoryproducts";
import SearchBarComp from "../../components/SearchBarComp";

const Title = styled.h1`
  margin-top: 20px;
  text-transform: capitalize;
`;

const Container = styled.div`
  margin-top: -30px;
`;

export const Product = ({ cart, setCart }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemgroup = searchParams.get("itemgroup");
  const itemProps = location.state?.itemProps;
  console.log(itemProps);

  return (
    <div>
      <Title>
        {itemgroup
          ? itemgroup.charAt(0).toUpperCase() + itemgroup.slice(1).toLowerCase()
          : "Chairs"}
      </Title>

      <Container>
        <SearchBarComp />
        <Inventoryproducts
          itemProps={itemProps}
          cart={cart}
          setCart={setCart}
        />
      </Container>
    </div>
  );
};
