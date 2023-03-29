import React from "react";
import styled from "styled-components";
import { Chairproducts } from "../components/Chairproducts";
import { Footer } from "../components/Footer";
import SearchBarComp from "../components/SearchBarComp";

const Title = styled.h1`
  margin-top: 20px;
`;

const Container = styled.div`
  margin-top: -30px;
`;

export const Chairs = () => {
  return (
    <div>
      <Title> Chairs </Title>

      <Container>
        <SearchBarComp />

        <Chairproducts></Chairproducts>

        <Chairproducts></Chairproducts>

        <Chairproducts></Chairproducts>
      </Container>
    </div>
  );
};
