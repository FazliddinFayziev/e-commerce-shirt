import React, { useEffect } from "react";
import { Home, Error, Catalogue, Product } from "./Pages";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { CartItems } from "./Components";
import { useGlobalContext } from "./Context/context";
import { GiShoppingBag } from "react-icons/gi";
import pathCart from "./Functions/functions";

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function App() {
  const { setCart, show } = useGlobalContext();
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

      {/* Alert Card */}
      {show && (
        <Stack className="alert__cart" sx={{ width: '50%' }} spacing={2}>
          {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
          {/* <Alert severity="warning">This is a warning alert — check it out!</Alert> */}
          {/* <Alert severity="info">This is an info alert — check it out!</Alert> */}
          <Alert severity="success">Product is added Successfully</Alert>
        </Stack>
      )}

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
