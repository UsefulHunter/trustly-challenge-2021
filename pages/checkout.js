import React from "react";
import styled from "styled-components";
import { withRouter } from "next/router";

import { Header } from "../components/Header";
const Checkout = (props) => {
  console.log(props.router.query.data);
  const data = JSON.parse(props.router.query.data);
  console.log(data);
  return (
    <CheckoutContainer>
      <Header
        alt="Person Avatar"
        title="Checkout"
        src="/stockPicture.jpg"
        showBack={true}
      />
    </CheckoutContainer>
  );
};

const CheckoutContainer = styled.div``;

export default withRouter(Checkout);
