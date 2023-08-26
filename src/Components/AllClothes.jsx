import React, { useEffect } from 'react';
import { popular } from '../Data/data';
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from 'react-router-dom';

// redux related
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Container/productSlice';
import SmallLoading from './SmallLoading';

const AllClothes = () => {

    // redux related
    const { loading, products, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    useEffect(() => {
        console.log(products)
    }, [products])


    // Main

    if (loading) {
        return <SmallLoading />
    }

    return (
        <>
            {!loading && error ? (<div>Error: {error}</div>) : null}
            {!loading && products.length ? (
                <div className='all-clothes'>
                    {products.map((product, index) => {
                        return (
                            <div key={index}>

                                <Link to={`/catalogue/${product.id}`}>
                                    <div className='single-cloth'>
                                        <img src={product.images} alt="single-cloth" />
                                    </div>
                                </Link>

                                <div className='shirt-container'>
                                    <div className='shirt-info'>
                                        <p className='category'>{product.category}</p>
                                        <p className='title'>{product.name}</p>
                                        <p className='price'>{product.price} UZS</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className='no__products__yet'>
                    <div>
                        <div className='no__products__yet__icon'>
                            <MdProductionQuantityLimits fontSize={50} />
                        </div>
                        <h3>No Products Yet</h3>
                    </div>
                </div>
            )}
        </>
    )
}

export default AllClothes