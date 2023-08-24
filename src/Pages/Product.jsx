import React, { useEffect } from 'react';

// redux related imports
import { useSelector } from 'react-redux';

// Styles

import "../Style/product.css";

// Components

import { LikeProducts, ProductInfo, SmallFooter, SmallNavbar } from '../Components';
import { useParams } from 'react-router-dom';

// Main

const Product = () => {

    // redux related
    const { loading } = useSelector((state) => state.singleProduct);

    // Product ID
    const { productId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

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