import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function disableScrolling() {
  document.body.classList.add("stop-scrolling");
}

export function enableScrolling() {
  document.body.classList.remove("stop-scrolling");
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
}
