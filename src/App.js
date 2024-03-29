import React, { useEffect } from "react";
import { Home, Error, Catalogue, Product, Account, Search, QRcode } from "./Pages";
import { Routes, Route, useLocation, Link, useParams } from "react-router-dom";
import { AlertCart, CartItems, ShippingInfo, Success } from "./Components";
import { useGlobalContext } from "./Context/context";
import { GiShoppingBag } from "react-icons/gi";
import { pathCart, pathShipping } from "./Functions/functions";
import { useSelector } from "react-redux";


function App() {
  const { setCart, setShip } = useGlobalContext();
  // redux related
  const { cartItems } = useSelector((state) => state.cartItems);
  const location = useLocation();
  const { pathname } = location

  // Functions

  // CartItems Cart
  useEffect(() => {
    pathCart(pathname, setCart);
  }, [pathname])

  // Shipping Cart
  useEffect(() => {
    pathShipping(pathname, setShip, cartItems);
  }, [pathname, cartItems])


  return (
    <>

      {/* Shipping Cart */}

      <ShippingInfo />

      {/* CartItems */}

      <CartItems />

      {/* AlertCart */}

      <AlertCart />

      {/* Routes */}

      <Routes>

        <Route path="/*" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/catalogue/:productId" element={<Product />} />
        <Route path="/qrcode/:codeId" element={<QRcode />} />
        <Route path="/account" element={<Account />} />
        <Route path="/success" element={<Success />} />
        <Route path="/search" element={<Search />} />
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
