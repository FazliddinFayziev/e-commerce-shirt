import React from 'react';
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from 'react-router-dom';
import { formatPrice } from '../Functions/functions';

// redux related
import SmallLoading from './SmallLoading';

const AllClothes = ({ loading, products }) => {


    // Main

    if (loading) {
        return <SmallLoading />
    }

    return (
        <>
            {!loading && products.length ? (
                <div className='all-clothes'>
                    {products.map((product, index) => {
                        return (
                            <div data-aos="fade-up" data-aos-easing="linear"
                                data-aos-duration="1000" key={index}>

                                <Link to={`/catalogue/${product.id}`}>
                                    <div className='single-cloth'>
                                        <img src={product.images} alt="single-cloth" />
                                    </div>
                                </Link>

                                <div className='shirt-container'>
                                    <div className='shirt-info'>
                                        <p className='category'>{product.category}</p>
                                        <p className='title'>{product.name}</p>
                                        <p className='price'>{formatPrice(product.price)} UZS</p>
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
                        <h3>No Such Product</h3>
                    </div>
                </div>
            )}
        </>
    )
}

export default AllClothes