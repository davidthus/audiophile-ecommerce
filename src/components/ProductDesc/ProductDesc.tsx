import React from "react";
import { IncludedItem } from "../../types/Product";
import {
  Container,
  FeaturesWrapper,
  Heading,
  ItemQuantity,
  ItemsContainer,
  StackRow,
  StackWrapper,
  Text,
} from "./ProductDesc.style";

interface ProductDescProps {
  features: string;
  includes: IncludedItem[];
}

function ProductDesc({ features, includes }: ProductDescProps) {
  return (
    <Container>
      <FeaturesWrapper>
        <Heading>Features</Heading>
        <Text>{features}</Text>
      </FeaturesWrapper>
      <ItemsContainer>
        <Heading>In The Box</Heading>
        <StackWrapper>
          {includes.map((item, i) => (
            <StackRow key={i}>
              <ItemQuantity>{item.quantity}x</ItemQuantity>
              <Text>{item.item}</Text>
            </StackRow>
          ))}
        </StackWrapper>
      </ItemsContainer>
    </Container>
  );
}

export default ProductDesc;
