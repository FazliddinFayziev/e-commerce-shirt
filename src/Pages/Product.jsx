import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// redux related imports
import { useDispatch, useSelector } from 'react-redux';

// Styles

import "../Style/product.css";

// Components

import { LikeProducts, ProductInfo, SmallFooter, SmallNavbar } from '../Components';
import Error from './Error';
import { fetchProducts } from '../Container/productSlice';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../Container/singleProductSlice';
import { filterLikedProducts } from '../Functions/functions';

// Main

const Product = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();

    // Local You may like products
    const [likeProduct, setLikeProduct] = useState([]);

    useEffect(() => {
        AOS.init();
    }, [])

    // redux related
    const { single_loading, singleProduct, error } = useSelector((state) => state.singleProduct);
    const { category } = singleProduct;
    const { products } = useSelector((state) => state.products);


    useEffect(() => {
        dispatch(fetchSingleProduct(productId))
    }, [productId])

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    useEffect(() => {
        setLikeProduct(filterLikedProducts(products, category, productId))
    }, [products, category, productId])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    return (
        <>
            <SmallNavbar />
            {error ? (
                <Error />
            ) : (
                <>
                    <ProductInfo singleProduct={singleProduct} single_loading={single_loading} />
                    {!single_loading && <LikeProducts likeProduct={likeProduct} />}
                </>
            )}
            <SmallFooter />
        </>
    )
}

export default Product