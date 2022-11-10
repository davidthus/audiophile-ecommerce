import React from "react";
import { Link } from "react-router-dom";
import { Button1 } from "../../shared/buttons";
import {
  ArticleWrapper,
  Container,
  Description,
  MainTitle,
  SecondTitle,
  Wrapper,
} from "./Hero.style";

function Hero() {
  return (
    <Container>
      <Wrapper>
        <ArticleWrapper>
          <SecondTitle>NEW PRODUCT</SecondTitle>
          <MainTitle>XX99 MARK II HEADPHONES</MainTitle>
          <Description>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Description>
          <Link to="/product/xx99-mark-two-headphones">
            <Button1>SEE PRODUCT</Button1>
          </Link>
        </ArticleWrapper>
      </Wrapper>
    </Container>
  );
}

export default Hero;
