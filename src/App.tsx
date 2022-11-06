import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
const Home = React.lazy(() => import("./pages/Home"));

const Fallback = styled.div`
  position: fixed;
  inset: 0;
  background-color: #fafafa;
`;

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:productCategory" element={<CategoryPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
