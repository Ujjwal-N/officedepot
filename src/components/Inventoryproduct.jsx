import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GradeIcon from "@mui/icons-material/Grade";
import { images } from "../productImageNames.js";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 450px;
  max-width: 450px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Text = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Inventoryproduct = ({ item }) => {
  const imageItem = images.find((element) => element.name === item.image);
  return (
    <Container>
      <Image src={imageItem ? imageItem.src : ""} alt={item.name + " image"} />
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <Info>
        <Icon
          as={Link}
          to={{
            pathname: "/itemPage",
            search: `?itemID=${item.inventory_id}`,
          }}
          state={{
            itemInfo: item ? item : undefined,
          }}
        >
          <VisibilityIcon />
        </Icon>
        <Icon>{<ShoppingCartIcon />}</Icon>
        <Icon>{<GradeIcon />}</Icon>
      </Info>
    </Container>
  );
};

export default Inventoryproduct;
