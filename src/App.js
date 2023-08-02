import React from "react";
import { Home, Error, Catalogue, Product } from "./Pages";
import { Routes, Route } from "react-router-dom";
import { CartItems } from "./Components";
import { useGlobalContext } from "./Context/context";
import { GiShoppingBag } from "react-icons/gi";

function App() {
  const { setCart } = useGlobalContext();
  return (
    <>

      {/* CartItems */}

      <CartItems />

      {/* Routes */}

      <Routes>

        <Route path="/*" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/catalogue/:productId" element={<Product />} />
        <Route path="*" element={<Error />} />

      </Routes>

      {/* Fixed Card to open CardItems card */}

      <div onClick={() => setCart(true)} className='fixed-card'>
        <GiShoppingBag fontSize={35} />
      </div>

    </>
  );
}

export default App;
