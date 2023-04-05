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

  const chunkedRows = useMemo(() => {
    const chunkSize = 4;
    const chunkedRows = [];

    for (let i = 0; i < rows.length; i += chunkSize) {
      const chunk = rows.slice(i, i + chunkSize);
      chunkedRows.push(chunk);
    }

    return chunkedRows;
  }, [rows]);

  return (
    <div>
      {rows.length > 0 ? (
        <Container>
          {chunkedRows.map((chunk, index) => (
            <Row key={`row-${index}`}>
              {chunk.map((item) => (
                <Inventoryproduct item={item} key={item.id} />
              ))}
            </Row>
          ))}
        </Container>
      ) : (
        <p>No inventory in this section</p>
      )}
    </div>
  );
};