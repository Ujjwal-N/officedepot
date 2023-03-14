import React from 'react'
import styled from "styled-components"
import { productItems } from './imageData'
import Homeproduct from './Homeproduct'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
