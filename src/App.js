import React from "react";
import { Home, Error } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
