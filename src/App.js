import React from "react";
import { Home, Error, Catalogue, Product } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/catalogue/:productId" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
