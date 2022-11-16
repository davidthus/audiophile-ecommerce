import React from "react";
import { ReactComponent as CheckoutIcon } from "../../assets/checkout/icon-order-confirmation.svg";
import { Container, IconWrapper, PageOverlay } from "./Checkout.style";

function Checkout() {
  return (
    <PageOverlay>
      <Container>
        <IconWrapper>
          <CheckoutIcon />
        </IconWrapper>
      </Container>
    </PageOverlay>
  );
}

export default Checkout;
