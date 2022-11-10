import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addItemToCart } from "../../features/CartSlice";
import {
  Article,
  ArticleContainer,
  ArticleHeading,
  ArticleImage,
  Description,
  Subheading,
} from "../../shared/article";
import { Button1 } from "../../shared/buttons";
import { Product } from "../../types/Product";
import {
  BackLink,
  ButtonsWrapper,
  ChangeQuantityWrapper,
  Container,
  IconWrapper,
  Price,
} from "./ProductArticle.style";

interface ProductArticleProps {
  product: Product;
}

function ProductArticle({ product }: ProductArticleProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [location.pathname]);

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
          <ButtonsWrapper>
            <ChangeQuantityWrapper>
              <IconWrapper
                onClick={() => {
                  if (quantity === 1) return;
                  setQuantity((prev) => prev - 1);
                }}
              >
                -
              </IconWrapper>
              {quantity}
              <IconWrapper onClick={() => setQuantity((prev) => prev + 1)}>
                +
              </IconWrapper>
            </ChangeQuantityWrapper>
            <Button1
              onClick={() => dispatch(addItemToCart({ product, quantity }))}
            >
              Add To Cart
            </Button1>
          </ButtonsWrapper>
        </Article>
      </ArticleContainer>
    </Container>
  );
}

export default ProductArticle;
