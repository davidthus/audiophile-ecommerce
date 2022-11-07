import React from "react";
import { BestGear, CategoryLinks, Hero, HomeProducts } from "../components";
import { HomeContentWrapper, PageContainer } from "../shared/page";

function Home() {
  return (
    <PageContainer>
      <Hero />
      <HomeContentWrapper>
        <CategoryLinks />
        <HomeProducts />
        <BestGear />
      </HomeContentWrapper>
    </PageContainer>
  );
}

export default Home;
