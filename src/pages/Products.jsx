import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/productCollection.css";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { GET_ALL_INVENTORY_ENDPOINT, STANDARD_ITEM_GROUPS } from "../constants";

import chairCollection from "../Images/chairCollection.jpg";
import hammerCollection from "../Images/hammerCollection.jpg";
import screwCollection from "../Images/screwCollection.jpg";
import tableCollection from "../Images/tableCollection.jpg";
import fridgeCollection from "../Images/fridgeCollection.jpg";
import outdoorCollection from "../Images/outdoorCollection.jpg";
import kitchenCollection from "../Images/kitchenCollection.jpg";
import indoorCollection from "../Images/indoorCollection.jpg";
import bathroomCollection from "../Images/bathroomCollection.jpg";

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
    transform: scale(1.1);
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
          console.log(error);
        });
    }
    if (inventoryItems === null) {
      getAllInventory();
    }
  }, [inventoryItems]);

  console.log("inventoryItems", inventoryItems);

  return (
    <div>
      <h1 style={{ "margin-top": "20px" }}> All Collections </h1>

      <StyledContainer>
        <ImgContainer>
          <ImgWrapper
            as={Link}
            to={{
              pathname: "/product",
              search: `?itemgroup=chair`,
            }}
            state={{
              itemProps: inventoryItems ? inventoryItems["chair"] : undefined,
            }}
          >
            <figure className="position-relative">
              <Image src={chairCollection} alt="chairCollection" />
              <figcaption>NUMBER #1 CHAIRS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>

          <ImgWrapper
            as={Link}
            to={{
              pathname: "/product",
              search: `?itemgroup=hammer`,
            }}
            state={{
              itemProps: inventoryItems ? inventoryItems["hammer"] : undefined,
            }}
          >
            <figure className="position-relative">
              <Image src={hammerCollection} alt="hammerCollection" />
              <figcaption>NUMBER #1 HAMMERS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>

          <ImgWrapper
            as={Link}
            to={{
              pathname: "/product",
              search: `?itemgroup=table`,
            }}
            state={{
              itemProps: inventoryItems ? inventoryItems["table"] : undefined,
            }}
          >
            <figure className="position-relative">
              <Image src={tableCollection} alt="tableCollection" />
              <figcaption>NUMBER #1 TABLES IN MARKET</figcaption>
            </figure>
          </ImgWrapper>

          <ImgWrapper
            as={Link}
            to={{
              pathname: "/product",
              search: `?itemgroup=screws`,
            }}
            state={{
              itemProps: inventoryItems ? inventoryItems["screws"] : undefined,
            }}
          >
            <figure className="position-relative">
              <Image src={screwCollection} alt="screwCollection" />

              <figcaption>NUMBER #1 SCREWS IN MARKET</figcaption>
            </figure>
          </ImgWrapper>

          <ImgWrapper
            as={Link}
            to={{
              pathname: "/product",
              search: `?itemgroup=fridge`,
            }}
            state={{
              itemProps: inventoryItems ? inventoryItems["fridge"] : undefined,
            }}
          >
            <figure className="position-relative">
              <Image src={fridgeCollection} alt="fridgeCollection" />
              <figcaption>NUMBER #1 FRIDGES IN MARKET</figcaption>
            </figure>
          </ImgWrapper>

          <ImgWrapper
            as={Link}
            to={{
              pathname: "/product",
              search: `?itemgroup=outdoor`,
            }}
            state={{
              itemProps: inventoryItems ? inventoryItems["outdoor"] : undefined,
            }}
          >
            <figure className="position-relative">
              <Image src={outdoorCollection} alt="outdoorCollection" />
              <figcaption>NUMBER #1 OURDOOR FURNITURE</figcaption>
            </figure>
          </ImgWrapper>

          <ImgWrapper
            as={Link}
            to={{
              pathname: "/product",
              search: `?itemgroup=kitchen`,
            }}
            state={{
              itemProps: inventoryItems ? inventoryItems["kitchen"] : undefined,
            }}
          >
            <figure className="position-relative">
              <Image src={kitchenCollection} alt="kitchenCollection" />
              <figcaption>NUMBER #1 KITCHEN STUFF</figcaption>
            </figure>
          </ImgWrapper>

          <ImgWrapper
            as={Link}
            to={{
              pathname: "/product",
              search: `?itemgroup=indoor`,
            }}
            state={{
              itemProps: inventoryItems ? inventoryItems["indoor"] : undefined,
            }}
          >
            <figure className="position-relative">
              <Image src={indoorCollection} alt="indoorCollection" />
              <figcaption>NUMBER #1 INDOOR FURNITURE</figcaption>
            </figure>
          </ImgWrapper>

          <ImgWrapper
            as={Link}
            to={{
              pathname: "/product",
              search: `?itemgroup=bathroom`,
            }}
            state={{
              itemProps: inventoryItems ? inventoryItems["bed"] : undefined,
            }}
          >
            <figure className="position-relative">
              <Image src={bathroomCollection} alt="bathroomCollection" />
              <figcaption>NUMBER #1 BATHROOM FURNITURE</figcaption>
            </figure>
          </ImgWrapper>

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
              <Image src={bathroomCollection} alt="bathroomCollection" />
              <figcaption>OTHER</figcaption>
            </figure>
          </ImgWrapper>
        </ImgContainer>
      </StyledContainer>
    </div>
  );
};
