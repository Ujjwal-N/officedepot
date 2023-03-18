import React from 'react'
import styled from "styled-components"
import { productItems } from './imageData'
import Homeproduct from './Homeproduct'
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;


export const Homeproducts = () => {
  return (
    
    <Container>
    {productItems.map((item) => (
        <Homeproduct item={item} key={item.id} />
      ))}
    </Container>

  )
}
