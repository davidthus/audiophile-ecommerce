import React from "react";
import { useParams } from "react-router-dom";
import {
  BestGear,
  CategoryLinks,
  ProductArticle,
  ProductDesc,
  ProductGallery,
  Reccomendations,
} from "../components";
import Data from "../data/data.json";
import { PageContainer, ProductContentWrapper } from "../shared/page";

function ProductPage() {
  const { slug } = useParams();
  const Product = Data.find((product) => product.slug === slug);

  return (
    <PageContainer>
      <ProductContentWrapper>
        {Product && (
          <>
            <ProductArticle product={Product} />
            <ProductDesc
              features={Product.features}
              includes={Product.includes}
            />
            <ProductGallery gallery={Product?.gallery} />
            <Reccomendations others={Product.others} />
          </>
        )}
        <CategoryLinks />
        <BestGear />
      </ProductContentWrapper>
    </PageContainer>
  );
}

export default ProductPage;
