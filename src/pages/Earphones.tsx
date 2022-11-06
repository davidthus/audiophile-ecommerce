import React from "react";
import YX1 from "../assets/product-yx1-earphones/desktop/image-product.jpg";

import { BestGear, CategoryLinks } from "../components";
import { Button1 } from "../shared/buttons";
import { BannerHeading, CategoryBanner } from "../shared/categoryBanner";
import { CategoryContentWrapper, PageContainer } from "../shared/categoryPage";

import {
  Article,
  ArticleContainer,
  ArticleHeading,
  ArticleImage,
  Description,
  Subheading,
} from "../shared/article";

function Earphones() {
  return (
    <PageContainer>
      <CategoryBanner>
        <BannerHeading>Earphones</BannerHeading>
      </CategoryBanner>
      <CategoryContentWrapper>
        <ArticleContainer reverse>
          <Article>
            <Subheading>New Product</Subheading>
            <ArticleHeading>YX1 WIRELESS EARPHONES</ArticleHeading>
            <Description>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </Description>
            <div>
              <Button1>See Product</Button1>
            </div>
          </Article>
          <ArticleImage
            src={YX1}
            alt="ZX9
            SPEAKER"
          />
        </ArticleContainer>
        <CategoryLinks />
        <BestGear />
      </CategoryContentWrapper>
    </PageContainer>
  );
}

export default Earphones;
