import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/shared/desktop/icon-arrow-right.svg";
import earphonesThumbnail from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphonesThumbnail from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { Button3 } from "../../shared/buttons";
import {
  Container,
  LinkContainer,
  LinkHeading,
  LinkImg,
  MobileContainer,
  MobileLinkContainer,
  MobileLinkHeading,
  MobileWrapper,
} from "./CategoryLinks.style";

function CategoryLinks({ navbar }: { navbar?: boolean }) {
  const { isMobileSize } = useMatchMedia();

  const links = [
    {
      heading: "headphones",
      path: "/category/headphones",
      imgSrc: headphonesThumbnail,
    },
    {
      heading: "speakers",
      path: "/category/speakers",
      imgSrc: speakersThumbnail,
    },
    {
      heading: "earphones",
      path: "/category/earphones",
      imgSrc: earphonesThumbnail,
    },
  ];

  return !isMobileSize ? (
    <Container sm={navbar && true}>
      {links.map((link, i) => (
        <LinkContainer sm={navbar && true} key={i}>
          <LinkImg src={link.imgSrc} alt={link.heading} />
          <LinkHeading>{link.heading}</LinkHeading>
          <Link
            to={link.path}
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignSelf: "end",
            }}
          >
            <Button3>
              SHOP <ArrowRight />
            </Button3>
          </Link>
        </LinkContainer>
      ))}
    </Container>
  ) : (
    <MobileContainer>
      {links.map((link, i) => (
        <MobileLinkContainer key={i}>
          <MobileWrapper>
            <LinkImg src={link.imgSrc} alt={link.heading} />
            <MobileLinkHeading>{link.heading}</MobileLinkHeading>
            <Link
              to={link.path}
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignSelf: "end",
              }}
            >
              <Button3>
                SHOP <ArrowRight />
              </Button3>
            </Link>
          </MobileWrapper>
        </MobileLinkContainer>
      ))}
    </MobileContainer>
  );
}

export default CategoryLinks;
