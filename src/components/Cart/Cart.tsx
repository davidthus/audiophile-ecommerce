import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeAll,
} from "../../features/CartSlice";
import { closeModal } from "../../features/ModalSlice";
import { enableScrolling } from "../../utils/scrolling";
import {
  Button,
  ChangeQuantityWrapper,
  Container,
  IconWrapper,
  Image,
  ImageWrapper,
  InfoWrapper,
  ItemsStackWrapper,
  ProductName,
  ProductPrice,
  RemoveAll,
  StackItemWrapper,
  TopWrapper,
  TotalPrice,
  TotalQuantity,
  TotalText,
  TotalWrapper,
} from "./Cart.style";

function Cart() {
  const { cart } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const itemPrices = cart.items.map((item) => {
    return item.quantity * item.product.price;
  });

  return (
    <Container>
      {cart.items.length !== 0 ? (
        <>
          <TopWrapper>
            <TotalQuantity>Cart ({cart.totalQuantity})</TotalQuantity>
            <RemoveAll onClick={() => dispatch(removeAll())}>
              Remove All
            </RemoveAll>
          </TopWrapper>
          <ItemsStackWrapper>
            {cart.items.map((item, i) => (
              <StackItemWrapper key={i}>
                <ImageWrapper>
                  <Image
                    src={require(`../../assets/cart/image-${item.product.slug}.jpg`)}
                    alt={item.product.name}
                  />
                </ImageWrapper>
                <InfoWrapper>
                  <ProductName>{item.product.shortName}</ProductName>
                  <ProductPrice>
                    $ {item.product.price.toLocaleString()}
                  </ProductPrice>
                </InfoWrapper>
                <ChangeQuantityWrapper>
                  <IconWrapper
                    onClick={() =>
                      dispatch(decreaseQuantity({ item: item.product.slug }))
                    }
                  >
                    -
                  </IconWrapper>
                  {item.quantity}
                  <IconWrapper
                    onClick={() =>
                      dispatch(increaseQuantity({ item: item.product.slug }))
                    }
                  >
                    +
                  </IconWrapper>
                </ChangeQuantityWrapper>
              </StackItemWrapper>
            ))}
          </ItemsStackWrapper>
          <TotalWrapper>
            <TotalText>Total</TotalText>
            <TotalPrice>
              ${" "}
              {itemPrices
                .reduce((prev, currentValue) => prev + currentValue, 0)
                .toLocaleString()}
            </TotalPrice>
          </TotalWrapper>
          <Link to="/checkout" style={{ width: "100%" }}>
            <Button
              onClick={() => {
                dispatch(closeModal());
                enableScrolling();
              }}
            >
              Checkout
            </Button>
          </Link>
        </>
      ) : (
        <TotalText>Your cart is empty.</TotalText>
      )}
    </Container>
  );
}

export default Cart;
