import React, { useEffect } from 'react';

// redux related imports
import { useSelector } from 'react-redux';

// Styles

import "../Style/product.css";

// Components

import { LikeProducts, ProductInfo, SmallFooter, SmallNavbar } from '../Components';

// Main

const Product = () => {

    // redux related
    const { loading } = useSelector((state) => state.singleProduct);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SmallNavbar />
            <ProductInfo />
            {!loading && <LikeProducts />}
            <SmallFooter />
        </>
    )
}

export default Product