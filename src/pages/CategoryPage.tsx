import React from "react";
import { useParams } from "react-router-dom";
import { BestGear, CategoryLinks } from "../components";
import Data from "../data/data.json";
import {
  Article,
  ArticleContainer,
  ArticleHeading,
  ArticleImage,
  Description,
  Subheading,
} from "../shared/article";
import { Button1 } from "../shared/buttons";
import { BannerHeading, CategoryBanner } from "../shared/categoryBanner";
import { CategoryContentWrapper, PageContainer } from "../shared/categoryPage";

function CategoryPage() {
  const { productCategory } = useParams();
  const products = Data.filter(
    (product) => product.category === productCategory
  );

  return (
    <PageContainer>
      <CategoryBanner>
        <BannerHeading>{productCategory}</BannerHeading>
      </CategoryBanner>
      <CategoryContentWrapper>
        {products.map((product, i) => (
          <ArticleContainer key={i}>
            <Article>
              {product.new && <Subheading>New Product</Subheading>}
              <ArticleHeading>{product.name}</ArticleHeading>
              <Description>{product.description}</Description>
              <div>
                <Button1>See Product</Button1>
              </div>
            </Article>
            <ArticleImage
              src={require(`../assets/${product.categoryImage.desktop}`)}
              alt="ZX9
            SPEAKER"
            />
          </ArticleContainer>
        ))}
        <CategoryLinks />
        <BestGear />
      </CategoryContentWrapper>
    </PageContainer>
  );
}

export default CategoryPage;
