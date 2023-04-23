import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/productCollection.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { GET_ALL_INVENTORY_ENDPOINT, STANDARD_ITEM_GROUPS } from "../constants";
import otherCollection from "../Images/otherCollection.jpg";
import ResetScrollPos from "../components/ResetScrollPos";

const StyledContainer = styled(Container)`
  max-width: 3000px;
  margin-bottom: 20px;
`;

const ImgContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ImgWrapper = styled.div`
  margin-top: 20px;
  margin-right: 40px;
  height: 400px;
  width: 600px;
  flex-basis: 30%;
`;

const Image = styled.img`
  width: 550px;
  height: 400px;
  border: 2px solid #444;
  width: 100%;
  transition: transform 0.2s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    filter: brightness(80%);
  }
`;

export const Products = ({ cart, setCart }) => {
  const [inventoryItems, setInventoryItems] = useState(null);

  useEffect(() => {
    async function getAllInventory() {
      axios
        .get(GET_ALL_INVENTORY_ENDPOINT)
        .then((response) => {
          let itemObjects = response.data;
          let itemGroupDict = {};
          for (let i = 0; i < itemObjects.length; i++) {
            let item = itemObjects[i];
            if (!(item.itemgroup in itemGroupDict)) {
              itemGroupDict[item.itemgroup] = [];
            }
            itemGroupDict[item.itemgroup].push(item);
          }

          setInventoryItems(itemGroupDict);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (inventoryItems === null) {
      getAllInventory();
    }
  }, [inventoryItems]);

  console.log("inventoryItems", inventoryItems);

  return (
    <div>
      <h1> All Collections </h1>

      <StyledContainer>
        <ImgContainer>
          {STANDARD_ITEM_GROUPS.map(({ itemGroup, imageSrc, caption }) => (
            <ImgWrapper
              key={itemGroup}
              as={Link}
              to={{
                pathname: "/product",
                search: `?itemgroup=${itemGroup}`,
              }}
              state={{
                itemProps: inventoryItems
                  ? itemGroup in inventoryItems ? inventoryItems[itemGroup] : []
                  : undefined,
              }}
            >
              <figure className="position-relative">
                <Image src={imageSrc} alt={`${itemGroup} Collection`} />
                <figcaption>{caption}</figcaption>
              </figure>
            </ImgWrapper>
          ))}
          <ImgWrapper
              as={Link}
              to={{
                pathname: "/product",
                search: `?itemgroup=other`,
              }}
              state={{
                itemProps: inventoryItems
                  ? Object.keys(inventoryItems).reduce(
                      (items, key) => {
                        if (!STANDARD_ITEM_GROUPS.includes(key)) {
                          items["other"] = inventoryItems[key];
                        }
                        return items;
                      },
                      { other: [] }
                    ).other
                  : undefined,
              }}
            >
              <figure className="position-relative">
                <Image src={otherCollection} alt="other Collection" />
                <figcaption>Other</figcaption>
              </figure>
            </ImgWrapper>
        </ImgContainer>
      </StyledContainer>
      <ResetScrollPos />
    </div>
  );
};
