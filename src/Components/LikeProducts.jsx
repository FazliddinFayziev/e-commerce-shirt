import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../Functions/functions';
import { MdProductionQuantityLimits } from "react-icons/md";
import { language } from '../Functions/language';
import { useGlobalContext } from '../Context/context';

const LikeProducts = ({ likeProduct }) => {
    const { activeLanguage } = useGlobalContext();
    return (
        <>

            {/* TITLE */}

            <div className='logo-title-like'>
                <h3>{language(activeLanguage).maylike}</h3>
            </div>

            {/* CONTAINER OF CLOTHES */}

            {likeProduct.length > 0 ? (
                <div className='all-clothes'>
                    {likeProduct.map((product, index) => {
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
                            <MdProductionQuantityLimits fontSize={30} />
                        </div>
                        <p>{language(activeLanguage).no_product}</p>
                    </div>
                </div>
            )}


        </>
    )
}

export default LikeProducts