import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ReactComponent as CartIcon } from "../../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/shared/tablet/icon-hamburger.svg";
import { Cart, CategoryLinks } from "../../components";
import { closeModal, openModal } from "../../features/ModalSlice";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { disableScrolling, enableScrolling } from "../../utils/scrolling";
import {
  CartWrapper,
  Container,
  HamburgerWrapper,
  LogoWrapper,
  MobileMenuWrapper,
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
  const { isTabletSize, isMobileSize, isDesktopSize } = useMatchMedia();
  const dispatch = useAppDispatch();
  const { modal, cart } = useAppSelector((state) => state);

  useEffect(() => {
    if (modal.modalOpen && modal.modalType === "navbar" && isDesktopSize) {
      dispatch(closeModal());
      enableScrolling();
    }
  }, [isTabletSize, modal.modalOpen, modal.modalType, dispatch, isDesktopSize]);

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
      {modal.modalOpen &&
        modal.modalType === "navbar" &&
        (isTabletSize || isMobileSize) && (
          <MobileMenuWrapper>
            <CategoryLinks navbar={true} />
          </MobileMenuWrapper>
        )}
      <Wrapper
        page={
          appPaths.some((path) => path.path === location.pathname)
            ? true
            : false
        }
      >
        <HamburgerWrapper
          onClick={() => {
            if (modal.modalType === "navbar" && modal.modalOpen) {
              dispatch(closeModal());
              enableScrolling();
            } else if (modal.modalType !== "navbar") {
              dispatch(openModal({ type: "navbar" }));
              disableScrolling();
            } else {
              dispatch(closeModal());
              enableScrolling();
            }
          }}
        >
          <HamburgerIcon />
        </HamburgerWrapper>
        <LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
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
