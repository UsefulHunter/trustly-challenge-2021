import React from "react";
import styled from "styled-components";
import { ShoesSize } from "../../utils/ShoesSize";
import { ShoesQuantity } from "../../utils/ShoesQuantity";

const Item = ({ item }) => (
  <ItemContainer>
    <ItemImage
      src={item.thumbnailURL}
      alt={`This sneaker have a ${item.color} color`}
    />
    <ItemTitle>{item.description}</ItemTitle>
    <ItemSelectContainer>
      <ItemLabel>Size</ItemLabel>
      <ItemSelect>
        {ShoesSize.map((size) => {
          return (
            <option key={size.value} value={size.value}>
              {size.value}
            </option>
          );
        })}
      </ItemSelect>
      <ItemLabel>Quantity</ItemLabel>
      <ItemSelect>
        {ShoesQuantity.map((quantity) => {
          return (
            <option key={quantity.value} value={quantity.value}>
              {quantity.value}
            </option>
          );
        })}
      </ItemSelect>
    </ItemSelectContainer>
    <ItemPrice>$ {item.price}</ItemPrice>
    <ItemButton>Add to Cart</ItemButton>
  </ItemContainer>
);

const ItemContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 66px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;
const ItemImage = styled.img``;

const ItemTitle = styled.h3`
  font-family: "Open sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
`;

const ItemLabel = styled.span`
  font-family: "Open sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #d8d8d8;
`;

const ItemSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ItemSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 25px;
  width: 70px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #8d8d8d;
  cursor: pointer;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%236B8067%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  background-size: 0.6em;
  background-position: right 5px top 50%;
  background-repeat: no-repeat;
`;

const ItemPrice = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 21px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`;

const ItemButton = styled.button`
  background-color: #6b8067;
  border-radius: 4.5px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-family: "Open Sans";
  font-weight: bold;
  margin: 0 10px 10px 10px;
  width: -webkit-fill-available;
  height: 5vh;
`;

export { Item };
