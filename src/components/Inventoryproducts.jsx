import React, { useMemo } from "react";
import styled from "styled-components";
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

export const Inventoryproducts = ({ itemProps }) => {
  const rows = [];
  if (itemProps) {
    itemProps.forEach((item) => {
      rows.push(item);
    });
  }

  return (
    <div>
      {rows.length > 0 ? (
        <Container>
          {rows.map((item) => (
            <Inventoryproduct item={item} key={item.id} />
          ))}
        </Container>
      ) : (
        <p>No inventory in this section</p>
      )}
    </div>
  );
};
