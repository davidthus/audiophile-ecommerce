import React from "react";
import { useParams } from "react-router-dom";
import {
  BestGear,
  CategoryLinks,
  ProductDesc,
  ProductGallery,
  Reccomendations,
} from "../components";
import Data from "../data/data.json";
import { ContentWrapper, PageContainer } from "../shared/page";

function ProductPage() {
  const { slug } = useParams();
  const Product = Data.find((product) => product.slug === slug);

  return (
    <PageContainer>
      <ContentWrapper>
        {Product && (
          <ProductDesc
            features={Product.features}
            includes={Product.includes}
          />
        )}
        {Product && <ProductGallery gallery={Product?.gallery} />}
        {Product && <Reccomendations others={Product.others} />}
        <CategoryLinks />
        <BestGear />
      </ContentWrapper>
    </PageContainer>
  );
}

export default ProductPage;
