import React from "react";
import { CategoryLinks, Hero, HomeProducts } from "../../components";
import { ContentWrapper, PageContainer } from "./Home.style";

function Home() {
  return (
    <PageContainer>
      <Hero />
      <ContentWrapper>
        <CategoryLinks />
        <HomeProducts />
      </ContentWrapper>
    </PageContainer>
  );
}

export default Home;
