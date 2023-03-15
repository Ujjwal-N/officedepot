import React from 'react'
import styled from "styled-components";
import {Search } from '@mui/icons-material';
import { Chairproducts } from './Chairproducts';

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  width: 50%;
  display: flex;
  padding: 5px;
  margin: 0 auto;
  justify-content: space-between; 
  margin-top:40px;
`;

const Input = styled.input`
  border: none;
  flex: 1;
`;

const Title = styled.h1`
  margin:20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


const Filter = styled.div`
  margin:20px;
`;

const FilterText = styled.div`
  font-size:20px;
  font-weight:600;
`;

const Choice = styled.div`
  font-size:20px;
  font-weight:600;
`;

const Container = styled.div``;

export const Chairs = () => {
  return (
    <Container>
     <SearchContainer>
        <Input placeholder="Search items..."/>
        <Search />
      </SearchContainer>

      <Title> Chairs </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Chairs: </FilterText>
          <select>
            <option value="">All</option>
            <option value="50">$50 and under</option>
            <option value="100">$100 and under</option>
            <option value="150">$150 and under</option>
          </select>
        </Filter>
      </FilterContainer>

      <Chairproducts>

      </Chairproducts>

      <Chairproducts>

      </Chairproducts>

      <Chairproducts>

      </Chairproducts>

    </Container>
  )
}