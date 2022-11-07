import React from "react";
import { Link, useParams } from "react-router-dom";
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
import { ContentWrapper, PageContainer } from "../shared/page";

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
      <ContentWrapper>
        {products.map((product, i) => (
          <ArticleContainer key={i}>
            <Article>
              {product.new && <Subheading>New Product</Subheading>}
              <ArticleHeading>{product.name}</ArticleHeading>
              <Description>{product.description}</Description>
              <Link to={`/product/${product.slug}`}>
                <Button1>See Product</Button1>
              </Link>
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
      </ContentWrapper>
    </PageContainer>
  );
}

export default CategoryPage;
