import React from "react";
import bestGearDesktopSrc from "../../assets/shared/desktop/image-best-gear.jpg";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import {
  ArticleWrapper,
  Container,
  Description,
  DesktopImage,
  Emphasis,
  Heading,
  TabletImage,
} from "./BestGear.style";

function AboutAudiophile() {
  const { isMobileSize, isTabletSize, isDesktopSize } = useMatchMedia();

  return (
    <Container>
      <ArticleWrapper>
        <Heading>
          BRINGING YOU THE <Emphasis>BEST</Emphasis> AUDIO GEAR
        </Heading>
        <Description>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Description>
      </ArticleWrapper>
      {isDesktopSize && (
        <DesktopImage src={bestGearDesktopSrc} alt="A man wearing headphones" />
      )}
      {(isMobileSize || isTabletSize) && <TabletImage />}
    </Container>
  );
}

export default AboutAudiophile;
