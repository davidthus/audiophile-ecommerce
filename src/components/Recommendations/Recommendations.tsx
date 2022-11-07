import React from "react";
import { Link } from "react-router-dom";
import { Button1 } from "../../shared/buttons";
import { Other } from "../../types/Product";
import {
  Container,
  Heading,
  ProductCard,
  ProductImage,
  ProductName,
  ProductsWrapper,
} from "./Recommendation.style";

interface RecommendationsProps {
  others: Other[];
}

function Recommendations({ others }: RecommendationsProps) {
  return (
    <Container>
      <Heading>You May Also Like</Heading>
      <ProductsWrapper>
        {others &&
          others.map((product, i) => (
            <ProductCard key={i}>
              <ProductImage
                src={require(`../../assets/${product.image.desktop}`)}
              />
              <ProductName>{product.name}</ProductName>
              <Link to={`/product/${product.slug}`}>
                <Button1>See Product</Button1>
              </Link>
            </ProductCard>
          ))}
      </ProductsWrapper>
    </Container>
  );
}

export default Recommendations;
