import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addItemToCart } from "../../features/CartSlice";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import {
  ProductArticleContainer,
  ProductArticleHeading,
  ProductArticleImage,
  ProductArticleWrapper,
  ProductDescription,
  ProductMobileImage,
  ProductSubheading,
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
  const { isMobileSize, isTabletSize, isDesktopSize } = useMatchMedia();
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
      <ProductArticleContainer>
        {isDesktopSize && (
          <ProductArticleImage
            src={require(`../../assets/${product?.image?.desktop}`)}
          />
        )}
        {(isMobileSize || isTabletSize) && (
          <ProductMobileImage
            tablet={product?.image?.tablet}
            mobile={product?.image?.mobile}
          />
        )}
        <ProductArticleWrapper>
          {product.new && <ProductSubheading>NEW PRODUCT</ProductSubheading>}
          <ProductArticleHeading>{product.name}</ProductArticleHeading>
          <ProductDescription>{product.description}</ProductDescription>
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
        </ProductArticleWrapper>
      </ProductArticleContainer>
    </Container>
  );
}

export default ProductArticle;
