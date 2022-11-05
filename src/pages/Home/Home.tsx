import React from "react";
import { BestGear, CategoryLinks, Hero, HomeProducts } from "../../components";
import { ContentWrapper, PageContainer } from "./Home.style";

function Home() {
  return (
    <PageContainer>
      <Hero />
      <ContentWrapper>
        <CategoryLinks />
        <HomeProducts />
        <BestGear />
      </ContentWrapper>
    </PageContainer>
  );
}

export default Home;
