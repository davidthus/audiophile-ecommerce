import React from "react";
import { Gallery } from "../../types/Product";
import { BottomLeft, Container, Right, TopLeft } from "./ProductGallery.style";

interface ProductGalleryProps {
  gallery: Gallery;
}

function ProductGallery({ gallery }: ProductGalleryProps) {
  return (
    <Container>
      <TopLeft
        desktop={gallery.first.desktop}
        tablet={gallery.first.tablet}
        mobile={gallery.first.mobile}
      />
      <BottomLeft
        desktop={gallery.second.desktop}
        tablet={gallery.second.tablet}
        mobile={gallery.second.mobile}
      />
      <Right
        desktop={gallery.third.desktop}
        tablet={gallery.third.tablet}
        mobile={gallery.third.mobile}
      />
    </Container>
  );
}

export default ProductGallery;
