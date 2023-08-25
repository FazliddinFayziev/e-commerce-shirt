import React, { useEffect } from "react";
import { Home, Error, Catalogue, Product } from "./Pages";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AlertCart, CartItems } from "./Components";
import { useGlobalContext } from "./Context/context";
import { GiShoppingBag } from "react-icons/gi";
import pathCart from "./Functions/functions";

function App() {
  const { setCart } = useGlobalContext();
  const location = useLocation();
  const { pathname } = location

  // Functions

  useEffect(() => {
    pathCart(pathname, setCart);
  }, [pathname])


  return (
    <>

      {/* CartItems */}

      <CartItems />

      {/* AlertCart */}

      <AlertCart />

      {/* Routes */}

      <Routes>

        <Route path="/*" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/catalogue/:productId" element={<Product />} />
        <Route path="*" element={<Error />} />

      </Routes>

      {/* Fixed Card to open CardItems card */}

      <Link to={"/cartItem"} className='fixed-card'>
        <GiShoppingBag fontSize={35} />
      </Link>

    </>
  );
}

export default App;
