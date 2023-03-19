import { Search } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/productCollection.css';
import { Footer } from '../components/Footer';

import {Container} from "react-bootstrap"

import chairCollection from "../Images/chairCollection.jpg"
import hammerCollection from "../Images/hammerCollection.jpg"
import screwCollection from "../Images/screwCollection.jpg"
import tableCollection from "../Images/tableCollection.jpg"
import fridgeCollection from "../Images/fridgeCollection.jpg"
import outdoorCollection from "../Images/outdoorCollection.jpg"
import kitchenCollection from "../Images/kitchenCollection.jpg"
import indoorCollection from "../Images/indoorCollection.jpg"
import bathroomCollection from "../Images/bathroomCollection.jpg"

import { BrowserRouter, Navigate, Routes, Route,Link,IndexRedirect } from 'react-router-dom';
import { Chairs } from './Chairs';

const SearchContainer = styled.div`
  border: 1px solid #444;
  width: 50%;
  display: flex;
  padding: 5px;
  margin: 0 auto;
  justify-content: space-between; 
`;

const StyledContainer = styled(Container)`
  width: 100%;
  max-width: 3000px;
  margin-bottom:20px;
`;

const Input = styled.input`
  border: none;
  flex: 1;
`;

const ImgContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  margin-top: 20px;
  margin-right:40px;
  height: 400px;
  width: 600px;
`;

const Image = styled.img`
  width: 550px;
  height: 400px;
  border:  2px solid #444;
  width: 100%;
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
          <ImgWrapper as={Link} to={"/chairs"}>
            <figure className="position-relative">
              <Image src={chairCollection} alt="chairCollection" />

              <figcaption >
                 NUMBER #1 CHAIRS IN MARKET
              </figcaption>

            </figure>
      
          </ImgWrapper>
          <ImgWrapper as={Link} to={"/chairs"}>
            <figure className="position-relative">
              <Image src={hammerCollection} alt="hammerCollection" />
               <figcaption>
                  NUMBER #1 HAMMERS IN MARKET
              </figcaption>

            </figure>
          </ImgWrapper>
          <ImgWrapper as={Link} to={"/chairs"}>
           <figure className="position-relative">
            <Image src={tableCollection } alt="tableCollection" />
            <figcaption>
                  NUMBER #1 TABLES IN MARKET
            </figcaption>
           </figure>
          </ImgWrapper>
          </ImgContainer>

        <ImgContainer>
          <ImgWrapper as={Link} to={"/chairs"}>
            <figure className="position-relative">
              <Image src={screwCollection} alt="screwCollection" />

              <figcaption>
                  NUMBER #1 SCREWS IN MARKET
              </figcaption>

            </figure>
      
          </ImgWrapper>
          <ImgWrapper as={Link} to={"/chairs"}>
            <figure className="position-relative">
              <Image src={fridgeCollection} alt="fridgeCollection" />
               <figcaption>
                  NUMBER #1 FRIDGES IN MARKET
              </figcaption>

            </figure>
          </ImgWrapper>
          <ImgWrapper as={Link} to={"/chairs"}>
           <figure className="position-relative">
            <Image src={ outdoorCollection } alt="outdoorCollection" />
            <figcaption>
                  NUMBER #1 OURDOOR FURNITURE
            </figcaption>
           </figure>
          </ImgWrapper>

          
        </ImgContainer>
 
        
        <ImgContainer>
          <ImgWrapper as={Link} to={"/chairs"}>
            <figure className="position-relative">
              <Image src={kitchenCollection} alt="kitchenCollection" />

              <figcaption>
                  NUMBER #1 KITCHEN STUFF
              </figcaption>

            </figure>
      
          </ImgWrapper>
          <ImgWrapper as={Link} to={"/chairs"}>
            <figure className="position-relative">
              <Image src={indoorCollection} alt="indoorCollection" />
               <figcaption>
                  NUMBER #1 INDOOR FURNITURE
              </figcaption>

            </figure>
          </ImgWrapper>
          <ImgWrapper as={Link} to={"/chairs"}>
           <figure className="position-relative">
            <Image src={ bathroomCollection } alt="bathroomCollection" />
            <figcaption>
                  NUMBER #1 BATHROOM FURNITURE
            </figcaption>
           </figure>
          </ImgWrapper>

          
        </ImgContainer>
          
      </StyledContainer>
      <Footer/>


      <div>
        <Routes>
            <Route path="/chairs" element={<Chairs/>}/>
        </Routes>
      </div>

    </div>

    
  ) 
}