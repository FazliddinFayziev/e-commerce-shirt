import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../Functions/functions';
import { MdProductionQuantityLimits } from "react-icons/md";

// redux related
import SmallLoading from './SmallLoading';
import { language } from '../Functions/language';
import { useGlobalContext } from '../Context/context';

const AllClothes = ({ loading, products }) => {

    const { activeLanguage } = useGlobalContext();

    // Main

    if (loading) {
        return <SmallLoading />
    }

    return (
        <>
            {!loading && products.length > 0 ? (
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
                <div className='no__other'>
                    <div>
                        <div className='no__other__icons'>
                            <MdProductionQuantityLimits fontSize={50} />
                        </div>
                        <p>{language(activeLanguage).suchproduct}</p>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default AllClothes