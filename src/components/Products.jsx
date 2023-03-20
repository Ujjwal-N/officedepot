import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/productCollection.css";

import { Container } from "react-bootstrap";

import chairCollection from "../Images/chairCollection.jpg";
import hammerCollection from "../Images/hammerCollection.jpg";
import screwCollection from "../Images/screwCollection.jpg";
import tableCollection from "../Images/tableCollection.jpg";

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  width: 50%;
  display: flex;
  padding: 5px;
  margin: 0 auto;
  justify-content: space-between;
`;

const StyledContainer = styled(Container)`
  width: 100%;
  max-width: 3000px;
`;

const Input = styled.input`
  border: none;
  flex: 1;
`;

const ImgContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ImgWrapper = styled.div`
  display: inline-block;
  margin-right: 34px;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 500px;
  height: 400px;
  border: 2px solid lightblue;
  transition: transform 0.2s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    filter: brightness(80%);
  }
`;

export const Products = () => {
  return (
    <div>
      <h1> All Collections </h1>
      <SearchContainer>
        <Input />
        <Search />
      </SearchContainer>

      <StyledContainer>
        <ImgContainer>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={chairCollection} alt="chairCollection" />

              <figcaption>NUMBER #1 CHAIRS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={hammerCollection} alt="hammerCollection" />
              <figcaption>NUMBER #1 HAMMERS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={tableCollection} alt="tableCollection" />
              <figcaption>NUMBER #1 TABLES IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={screwCollection} alt="screwCollection" />
              <figcaption>NUMBER #1 SCREWDRIVERS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
        </ImgContainer>
        <ImgContainer>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={chairCollection} alt="chairCollection" />

              <figcaption>NUMBER #1 CHAIRS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={hammerCollection} alt="hammerCollection" />
              <figcaption>NUMBER #1 HAMMERS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={tableCollection} alt="tableCollection" />
              <figcaption>NUMBER #1 TABLES IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={screwCollection} alt="screwCollection" />
              <figcaption>NUMBER #1 SCREWDRIVERS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
        </ImgContainer>
        <ImgContainer>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={chairCollection} alt="chairCollection" />

              <figcaption>NUMBER #1 CHAIRS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={hammerCollection} alt="hammerCollection" />
              <figcaption>NUMBER #1 HAMMERS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={tableCollection} alt="tableCollection" />
              <figcaption>NUMBER #1 TABLES IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
          <ImgWrapper>
            <figure className="position-relative">
              <Image src={screwCollection} alt="screwCollection" />
              <figcaption>NUMBER #1 SCREWDRIVERS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>
        </ImgContainer>
      </StyledContainer>
    </div>
  );
};
