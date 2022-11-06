import React from "react";
import ZX7 from "../assets/shared/desktop/image-zx7-speaker.jpg";
import ZX9 from "../assets/shared/desktop/image-zx9-speaker.jpg";

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

function Speakers() {
  return (
    <PageContainer>
      <CategoryBanner>
        <BannerHeading>Speakers</BannerHeading>
      </CategoryBanner>
      <CategoryContentWrapper>
        <ArticleContainer reverse>
          <Article>
            <Subheading>New Product</Subheading>
            <ArticleHeading>ZX9 SPEAKER</ArticleHeading>
            <Description>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </Description>
            <div>
              <Button1>See Product</Button1>
            </div>
          </Article>
          <ArticleImage
            src={ZX9}
            alt="ZX9
            SPEAKER"
          />
        </ArticleContainer>
        <ArticleContainer>
          <Article>
            <ArticleHeading>ZX7 SPEAKER</ArticleHeading>
            <Description>
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </Description>
            <div>
              <Button1>See Product</Button1>
            </div>
          </Article>
          <ArticleImage
            src={ZX7}
            alt="ZX7
            SPEAKER"
          />
        </ArticleContainer>
        <CategoryLinks />
        <BestGear />
      </CategoryContentWrapper>
    </PageContainer>
  );
}

export default Speakers;
