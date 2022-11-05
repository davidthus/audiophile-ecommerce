import React from "react";
import earphonesSrc from "../../assets/home/desktop/image-earphones-yx1.jpg";
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
          <CTA>See Product</CTA>
        </TopSectionArticle>
      </TopSection>
      <MiddleSectionArticle>
        <SecondaryHeading>ZX7 SPEAKER</SecondaryHeading>
        <div>
          <Button2>See Product</Button2>
        </div>
      </MiddleSectionArticle>
      <BottomLeft src={earphonesSrc} alt="yx1 earphones" />
      <BottomRight>
        <SecondaryHeading>YX1 EARPHONES</SecondaryHeading>
        <div>
          <Button2>See Product</Button2>
        </div>
      </BottomRight>
    </Container>
  );
}

export default HomeProducts;
