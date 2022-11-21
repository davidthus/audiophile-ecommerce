import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ReactComponent as CheckoutIcon } from "../../assets/checkout/icon-order-confirmation.svg";
import { removeAll } from "../../features/CartSlice";
import { closeModal } from "../../features/ModalSlice";
import { Button1 } from "../../shared/buttons";
import { enableScrolling } from "../../utils/scrolling";
import {
  Container,
  GrandTotalPrice,
  GrandTotalText,
  Heading,
  IconWrapper,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemQuantity,
  ItemWrapper,
  LeftSide,
  MiddleSection,
  PageOverlay,
  RightSide,
  ShowMoreToggle,
  SmallMessage,
  StackWrapper,
} from "./Checkout.style";

function Checkout() {
  const { cart } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showMore, toggleShowMore] = useState(false);
  const itemPrices = cart.items.map((item) => {
    return item.quantity * item.product.price;
  });
  const total = Number(
    itemPrices.reduce((prev, currentValue) => prev + currentValue, 0)
  );

  return (
    <PageOverlay>
      <Container>
        <IconWrapper>
          <CheckoutIcon />
        </IconWrapper>
        <Heading>Thank you for your order</Heading>
        <SmallMessage>
          You will receive an email confirmation shortly.
        </SmallMessage>
        <MiddleSection>
          <LeftSide>
            {cart.items.length === 1 ? (
              cart.items.map((item, i) => (
                <ItemWrapper key={i}>
                  <ItemImage
                    src={require(`../../assets/cart/image-${item.product.slug}.jpg`)}
                    alt={item.product.name}
                  />
                  <ItemInfo>
                    <ItemName>{item.product.shortName}</ItemName>
                    <ItemPrice>
                      $ {item.product.price.toLocaleString()}
                    </ItemPrice>
                  </ItemInfo>
                  <ItemQuantity>x{item.quantity}</ItemQuantity>
                </ItemWrapper>
              ))
            ) : (
              <>
                <StackWrapper>
                  <ItemWrapper>
                    <ItemImage
                      src={require(`../../assets/cart/image-${cart.items[0].product.slug}.jpg`)}
                      alt={cart.items[0].product.name}
                    />
                    <ItemInfo>
                      <ItemName>{cart.items[0].product.shortName}</ItemName>
                      <ItemPrice>
                        $ {cart.items[0].product.price.toLocaleString()}
                      </ItemPrice>
                    </ItemInfo>
                    <ItemQuantity>x{cart.items[0].quantity}</ItemQuantity>
                  </ItemWrapper>
                  {showMore &&
                    cart.items.slice(1).map((item, i) => (
                      <ItemWrapper key={i}>
                        <ItemImage
                          src={require(`../../assets/cart/image-${item.product.slug}.jpg`)}
                          alt={item.product.name}
                        />
                        <ItemInfo>
                          <ItemName>{item.product.shortName}</ItemName>
                          <ItemPrice>
                            $ {item.product.price.toLocaleString()}
                          </ItemPrice>
                        </ItemInfo>
                        <ItemQuantity>x{item.quantity}</ItemQuantity>
                      </ItemWrapper>
                    ))}
                </StackWrapper>
                <ShowMoreToggle onClick={() => toggleShowMore((prev) => !prev)}>
                  {showMore
                    ? "View less"
                    : `and ${cart.items.length - 1} other item(s)`}
                </ShowMoreToggle>
              </>
            )}
          </LeftSide>
          <RightSide>
            <GrandTotalText>GRAND TOTAL</GrandTotalText>
            <GrandTotalPrice>
              $ {(total * 1.2 + 50).toLocaleString()}
            </GrandTotalPrice>
          </RightSide>
        </MiddleSection>
        <Button1
          onClick={() => {
            enableScrolling();
            dispatch(removeAll());
            navigate("/");
            dispatch(closeModal());
          }}
        >
          Back To Home
        </Button1>
      </Container>
    </PageOverlay>
  );
}

export default Checkout;
