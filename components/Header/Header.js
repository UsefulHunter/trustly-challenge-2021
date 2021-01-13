import React from "react";
import styled from "styled-components";

const Header = ({ alt, title, src }) => (
  <HeaderContainer>
    <Avatar src={src} alt={alt} visibility="hidden" />
    <Title>{title}</Title>
    <Avatar src={src} alt={alt} />
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  background-color: #f1f1f1;
  height: 10vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-left: auto;
  margin-right: 10vh;
  visibility: ${(props) => props.visibility || true};

  @media (max-width: 768px) {
    margin-right: 2vh;
  }
`;

const Title = styled.h1`
  font-size: 26px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 0;
  line-height: 30px;
  font-weight: normal;
`;

export { Header };
