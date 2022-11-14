import React from "react";
import { CheckoutForm } from "../components";
import { BackLink, CheckoutWrapper, PageContainer } from "../shared/page";

function Checkout() {
  return (
    <PageContainer>
      <CheckoutWrapper>
        <BackLink>Go Back</BackLink>
        <CheckoutForm />
      </CheckoutWrapper>
    </PageContainer>
  );
}

export default Checkout;
