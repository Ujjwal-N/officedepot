import React from 'react';
import styled from "styled-components";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import '../css/slider.css';
import { useState } from "react";
import {sliderItems} from "./imageData"

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  border: 2px solid #444;
  margin-top: -90px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 65px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  background-color: #13755ece;
`;

export const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (

    <div class = "scaleDown">
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewIcon/>
      </Arrow>

      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map(item => (
      <Slide bg = "#fff7f7">
        <ImgContainer>
            <Image src={item.img} />
        </ImgContainer>

        <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
        </InfoContainer>

      </Slide >

        ))}

      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon/>
      </Arrow>
    </Container>
    </div>
  )
}