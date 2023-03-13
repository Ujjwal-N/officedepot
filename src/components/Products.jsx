import { Search } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components";

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  width: 50%;
  display: flex;
  padding: 5px;
  margin: 0 auto;
  justify-content: space-between; 
`;

const Input = styled.input`
  border: none;
  flex: 1;
`;

export const Products = () => {
  return (
    <div>
      <h1> Products </h1>
      <SearchContainer>
        <Input />
        <Search />
      </SearchContainer>
    </div>
  ) 
}