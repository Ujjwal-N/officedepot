import React, { useMemo } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { inventoryItems } from "./imageData";
import Inventoryproduct from "./Inventoryproduct";

const Container = styled.div`
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Inventoryproducts = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemgroup = searchParams.get("itemgroup");


  const filteredItems = useMemo(() => {
    if (itemgroup) {
      return inventoryItems.filter((item) => item.itemgroup === itemgroup || item.name === itemgroup);
    } else {
      return inventoryItems;
    }
  }, [itemgroup]);

  const rows = [];
  for (let i = 0; i < filteredItems.length; i += 4) {
    rows.push(filteredItems.slice(i, i + 4));
  }

  return (
    <Container>
      {rows.map((row, index) => (
        <Row key={index}>
          {row.map((item) => (
            <Inventoryproduct item={item} key={item.id} />
          ))}
        </Row>
      ))}
    </Container>
  );
};