import React from "react";
import { Home, Error, Catalogue } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
