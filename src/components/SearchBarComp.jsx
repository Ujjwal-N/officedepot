import React from 'react'
import styled from "styled-components";
import {Search } from '@mui/icons-material';

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

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Filter = styled.div`
  margin:20px;
`;

const FilterText = styled.div`
  font-size:20px;
  font-weight:600;
`;

const SearchFilterContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const SearchBarComp = () => {
  return (
     <SearchFilterContainer>
      <SearchContainer>
        <Input placeholder="Search items..."/>
        <Search />
      </SearchContainer>
      <FilterContainer>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <select style={{
              fontSize: "16px",
              fontWeight: "500",
              width: "100%",
              
            }}>
            <option value="Feature">Feature</option>
            <option value="Best">Best Selling</option>
            <option value="Alphabet1">Alphabet: A-Z</option>
            <option value="Alphabet2">Alphabet: Z-A</option>
            <option value="Price1">Price: Low to High</option>
            <option value="Price2">Price: High to Low</option>
             <option value="Weight1">Weight: Low to High</option>
            <option value="Weight2">Weight: High to Low</option>
          </select>
        </Filter>
      </FilterContainer>
      </SearchFilterContainer>
  )
}

export default SearchBarComp;