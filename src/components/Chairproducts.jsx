import React from 'react'
import styled from "styled-components"
import { chairItems } from './imageData'
import Chairproduct from './Chairproduct'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export const Chairproducts = () => {
  return (
    
    <Container>
    {chairItems.map((item) => (
        <Chairproduct item={item} key={item.id} />
      ))}
    </Container>

  )
}
