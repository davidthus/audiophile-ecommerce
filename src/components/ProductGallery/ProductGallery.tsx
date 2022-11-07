import React from "react";
import { Gallery } from "../../types/Product";
import { BottomLeft, Container, Right, TopLeft } from "./ProductGallery.style";

interface ProductGalleryProps {
  gallery: Gallery;
}

function ProductGallery({ gallery }: ProductGalleryProps) {
  return (
    <Container>
      <TopLeft background={gallery.first.desktop} />
      <BottomLeft background={gallery.second.desktop} />
      <Right background={gallery.third.desktop} />
    </Container>
  );
}

export default ProductGallery;
