import React from 'react';

// Styles

import "../Style/product.css";

// Components

import { LikeProducts, ProductInfo, SmallFooter, SmallNavbar } from '../Components';

// Main

const Product = () => {

    return (
        <>
            <SmallNavbar />
            <ProductInfo />
            <LikeProducts />
            <SmallFooter />
        </>
    )
}

export default Product