import React from "react";
import { Link } from "react-router-dom";
import { Button2 } from "../../shared/buttons";

import {
  BottomLeft,
  BottomRight,
  Container,
  CTA,
  Description,
  Heading,
  MiddleSectionArticle,
  SecondaryHeading,
  TopSection,
  TopSectionArticle,
} from "./HomeProducts.style";

function HomeProducts() {
  return (
    <Container>
      <TopSection>
        <TopSectionArticle>
          <Heading>ZX9 SPEAKER</Heading>
          <Description>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Description>
          <Link to="/product/zx9-speaker">
            <CTA>See Product</CTA>
          </Link>
        </TopSectionArticle>
      </TopSection>
      <MiddleSectionArticle>
        <SecondaryHeading>ZX7 SPEAKER</SecondaryHeading>
        <Link to="/product/zx7-speaker">
          <Button2>See Product</Button2>
        </Link>
      </MiddleSectionArticle>
      <BottomLeft />
      <BottomRight>
        <SecondaryHeading>YX1 EARPHONES</SecondaryHeading>
        <Link to="/product/yx1-earphones">
          <Button2>See Product</Button2>
        </Link>
      </BottomRight>
    </Container>
  );
}

export default HomeProducts;
