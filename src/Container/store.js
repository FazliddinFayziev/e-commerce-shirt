import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice';
import singleProductSlice from "./singleProductSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        singleProduct: singleProductSlice,
        cartItems: cartSlice,
    },
});

export default store;
