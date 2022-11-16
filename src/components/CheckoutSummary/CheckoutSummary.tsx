import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Button1 } from "../../shared/buttons";
import {
  Container,
  GrandTotal,
  Heading,
  ItemImage,
  ItemInfo,
  ItemListWrapper,
  ItemName,
  ItemPrice,
  ItemQuantity,
  ItemWrapper,
  Price,
  PriceRow,
  PricesSection,
  PricesWrapper,
  PriceText,
} from "./CheckoutSummary.style";

function CheckoutSummary() {
  const { cart } = useAppSelector((state) => state);
  const itemPrices = cart.items.map((item) => {
    return item.quantity * item.product.price;
  });
  const total = Number(
    itemPrices.reduce((prev, currentValue) => prev + currentValue, 0)
  );

  return (
    <Container>
      <Heading>Summary</Heading>
      <ItemListWrapper>
        {cart.items.map((item, i) => (
          <ItemWrapper key={i}>
            <ItemImage
              src={require(`../../assets/cart/image-${item.product.slug}.jpg`)}
              alt={item.product.name}
            />
            <ItemInfo>
              <ItemName>{item.product.shortName}</ItemName>
              <ItemPrice>$ {item.product.price.toLocaleString()}</ItemPrice>
            </ItemInfo>
            <ItemQuantity>x{item.quantity}</ItemQuantity>
          </ItemWrapper>
        ))}
      </ItemListWrapper>
      <PricesSection>
        <PricesWrapper>
          <PriceRow>
            <PriceText>Total</PriceText>
            <Price>$ {(total * 1.2).toLocaleString()}</Price>
          </PriceRow>
          <PriceRow>
            <PriceText>Shipping</PriceText>
            <Price>$ 50</Price>
          </PriceRow>
          <PriceRow>
            <PriceText>VAT (INCLUDED)</PriceText>
            <Price>$ {(total * 0.2).toLocaleString()}</Price>
          </PriceRow>
        </PricesWrapper>
        <PriceRow>
          <PriceText>Grand Total</PriceText>
          <GrandTotal>$ {(total * 1.2 + 50).toLocaleString()}</GrandTotal>
        </PriceRow>
      </PricesSection>
      <Button1 type="submit">CONTINUE</Button1>
    </Container>
  );
}

export default CheckoutSummary;
