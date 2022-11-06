import React from "react";
import XX59 from "../assets/shared/desktop/image-xx59-headphones.jpg";
import markI from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import markII from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
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

function Headphones() {
  return (
    <PageContainer>
      <CategoryBanner>
        <BannerHeading>Headphones</BannerHeading>
      </CategoryBanner>
      <CategoryContentWrapper>
        <ArticleContainer reverse>
          <Article>
            <Subheading>New Product</Subheading>
            <ArticleHeading>XX99 Mark II Headphones</ArticleHeading>
            <Description>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </Description>
            <div>
              <Button1>See Product</Button1>
            </div>
          </Article>
          <ArticleImage
            src={markII}
            alt="XX99 Mark II
Headphones"
          />
        </ArticleContainer>
        <ArticleContainer>
          <Article>
            <ArticleHeading>XX99 Mark I Headphones</ArticleHeading>
            <Description>
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </Description>
            <div>
              <Button1>See Product</Button1>
            </div>
          </Article>
          <ArticleImage
            src={markI}
            alt="XX99 Mark II
Headphones"
          />
        </ArticleContainer>
        <ArticleContainer reverse>
          <Article>
            <ArticleHeading>XX59 Headphones</ArticleHeading>
            <Description>
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </Description>
            <div>
              <Button1>See Product</Button1>
            </div>
          </Article>
          <ArticleImage
            src={XX59}
            alt="XX99 Mark II
Headphones"
          />
        </ArticleContainer>
        <CategoryLinks />
        <BestGear />
      </CategoryContentWrapper>
    </PageContainer>
  );
}

export default Headphones;
