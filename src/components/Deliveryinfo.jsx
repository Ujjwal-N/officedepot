import React from 'react'
import '../css/slider.css';
import styled from "styled-components";
import delivery from '../Images/delivery1.jpg';

const Container = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: auto;
  border: 2px solid #444;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  width:50%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
  max-width: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 3px;

`;


export const Deliveryinfo = () => {
  return (
    <div class = "deliveryPad">

    <Container>
        <ImgContainer>
            <Image src={delivery} />
        </ImgContainer>

        <InfoContainer>
              <Title>GET FREE DELIVERY</Title>
              <Desc>FOR ANY ORDER UNDER SOMETHING POUND</Desc>
        </InfoContainer>

    </Container>
        
    </div>

  )
}
