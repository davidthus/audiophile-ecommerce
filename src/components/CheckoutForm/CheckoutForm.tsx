import React from "react";
import { CheckoutSummary } from "../../components";
import { Container, FormWrapper } from "./CheckoutForm.style";

function CheckoutForm() {
  return (
    <Container>
      <FormWrapper></FormWrapper>
      <CheckoutSummary />
    </Container>
  );
}

export default CheckoutForm;
