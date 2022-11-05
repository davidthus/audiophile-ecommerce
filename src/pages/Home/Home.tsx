import React from "react";
import { CategoryLinks, Hero } from "../../components";
import { ContentWrapper, PageContainer } from "./Home.style";

function Home() {
  return (
    <PageContainer>
      <Hero />
      <ContentWrapper>
        <CategoryLinks />
      </ContentWrapper>
    </PageContainer>
  );
}

export default Home;
