import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import {
  CartWrapper,
  Container,
  NavLink,
  NavLinksWrapper,
  Wrapper,
} from "./Navbar.style";

const appPaths = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "headphones",
    path: "/headphones",
  },
  {
    name: "speakers",
    path: "/speakers",
  },
  {
    name: "earphones",
    path: "/earphones",
  },
];

function Navbar() {
  const location = useLocation();

  return (
    <Container>
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
          <Cart />
        </CartWrapper>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
