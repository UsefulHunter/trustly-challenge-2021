import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { ArrowIcon } from "../ArrowIcon";

const Header = ({ alt, title, src, showBack = false }) => {
  const router = useRouter();
  const handleClick = () => router.back();
  return (
    <HeaderContainer>
      <Button visibility={showBack}>
        <Svg />
        <ButtonLabel>Back</ButtonLabel>
      </Button>
      <Title>{title}</Title>
      <Avatar src={src} alt={alt} />
    </HeaderContainer>
  );
};

const Button = styled.button`
  //background: transparent;
  box-shadow: none;
  padding: 4.35px 21.75px;
  margin: 0;
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 17.4px;
  width: 115px;
  height: 35px;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-around;
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
`;

const ButtonLabel = styled.span`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 21.7531px;
  line-height: 25px;

  color: #000000;
`;

const Svg = styled(ArrowIcon)`
  align-self: center;
`;

const HeaderContainer = styled.header`
  background-color: #f1f1f1;
  height: 10vh;
  padding: 0 5vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 35px;
  height: 35px;
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
