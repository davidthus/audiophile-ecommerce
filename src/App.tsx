import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Headphones = React.lazy(() => import("./pages/Headphones/Headphones"));
const Speakers = React.lazy(() => import("./pages/Speakers/Speakers"));
const Earphones = React.lazy(() => import("./pages/Earphones/Earphones"));

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
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
