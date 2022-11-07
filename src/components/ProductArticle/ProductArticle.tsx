import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Article,
  ArticleContainer,
  ArticleHeading,
  ArticleImage,
  Description,
  Subheading,
} from "../../shared/article";
import { Product } from "../../types/Product";
import { BackLink, Container, Price } from "./ProductArticle.style";

interface ProductArticleProps {
  product: Product;
}

function ProductArticle({ product }: ProductArticleProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <BackLink onClick={() => navigate(-1)}>Go Back</BackLink>
      <ArticleContainer>
        <ArticleImage
          src={require(`../../assets/${product?.image?.desktop}`)}
        />
        <Article>
          {product.new && <Subheading>NEW PRODUCT</Subheading>}
          <ArticleHeading>{product.name}</ArticleHeading>
          <Description product>{product.description}</Description>
          <Price>$ {product.price.toLocaleString()}</Price>
        </Article>
      </ArticleContainer>
    </Container>
  );
}

export default ProductArticle;
