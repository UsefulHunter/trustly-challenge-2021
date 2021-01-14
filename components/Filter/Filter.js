import React from "react";
import styled from "styled-components";

const Filter = ({ placeholder, value, onChange }) => (
  <FilterInput
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

const FilterInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  box-shadow: none;
  outline: none;
  width: 100%;
  text-align: center;
  margin-bottom: 12px;
`;

export { Filter };
