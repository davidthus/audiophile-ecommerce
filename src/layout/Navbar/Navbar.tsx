import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ReactComponent as CartIcon } from "../../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { Cart } from "../../components";
import { closeModal, openModal } from "../../features/ModalSlice";
import { disableScrolling, enableScrolling } from "../../utils/scrolling";
import {
  CartWrapper,
  Container,
  NavLink,
  NavLinksWrapper,
  PageOverlay,
  TotalSpan,
  Wrapper,
} from "./Navbar.style";

const appPaths = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "headphones",
    path: "/category/headphones",
  },
  {
    name: "speakers",
    path: "/category/speakers",
  },
  {
    name: "earphones",
    path: "/category/earphones",
  },
];

function Navbar() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { modal, cart } = useAppSelector((state) => state);

  return (
    <Container>
      {((modal.modalOpen && modal.modalType === "navbar") ||
        (modal.modalOpen &&
          modal.modalType === "cart" &&
          location.pathname !== "/")) && (
        <PageOverlay
          onClick={() => {
            dispatch(closeModal());
            enableScrolling();
          }}
        />
      )}
      {modal.modalOpen && modal.modalType === "checkout" && <PageOverlay />}
      <Wrapper
        page={
          appPaths.some((path) => path.path === location.pathname)
            ? true
            : false
        }
      >
        <Link to="/">
          <Logo />
        </Link>
        <NavLinksWrapper>
          {appPaths
            .filter((path) => {
              if (location.pathname === "/") {
                return path.name !== "home";
              } else {
                return path;
              }
            })
            .map((path, i) => (
              <Link style={{ textDecoration: "none" }} key={i} to={path.path}>
                <NavLink
                  active={location.pathname === path.path ? true : false}
                >
                  {path.name}
                </NavLink>
              </Link>
            ))}
        </NavLinksWrapper>
        <CartWrapper>
          <CartWrapper
            onClick={() => {
              if (modal.modalOpen && modal.modalType === "checkout") {
                return;
              } else if (modal.modalOpen && modal.modalType === "cart") {
                dispatch(closeModal());
                enableScrolling();
              } else {
                dispatch(openModal({ type: "cart" }));
                disableScrolling();
              }
            }}
          >
            <CartIcon />
            {cart.totalQuantity > 0 && (
              <TotalSpan>{cart.totalQuantity}</TotalSpan>
            )}
          </CartWrapper>
          {modal.modalOpen && modal.modalType === "cart" && <Cart />}
        </CartWrapper>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
