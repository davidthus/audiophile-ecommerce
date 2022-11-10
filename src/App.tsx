import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "./app/hooks";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
const Home = React.lazy(() => import("./pages/Home"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));

const Fallback = styled.div`
  position: fixed;
  inset: 0;
  background-color: #fafafa;
`;

function App() {
  const state = useAppSelector((state) => state);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state]);

  return (
    <>
      <Navbar />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:productCategory" element={<CategoryPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
