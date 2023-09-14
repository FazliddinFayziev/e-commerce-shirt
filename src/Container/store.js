import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice';
import singleProductSlice from "./singleProductSlice";
import cartSlice from "./cartSlice";
import bannerSlice from "./bannerSlice";
import qrcodeSlice from "./qrcodeSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        singleProduct: singleProductSlice,
        cartItems: cartSlice,
        banner: bannerSlice,
        qrcode: qrcodeSlice,
    },
});

export default store;
