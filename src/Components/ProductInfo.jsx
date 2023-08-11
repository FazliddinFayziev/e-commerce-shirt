import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// redux related
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../Container/singleProductSlice';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {

    const { productId } = useParams();
    const [activeImg, setActiveImg] = useState('');


    // redux related
    const { loading, singleProduct, error } = useSelector((state) => state.singleProduct);
    const { category, colors, images, name, desceng, descuz, descru, price, size } = singleProduct;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleProduct(productId))
    }, [])

    useEffect(() => {
        console.log(singleProduct)
        setActiveImg(images[0])
    }, [singleProduct])

    // Main
    return (
        <>

            {/* ADDITIONAL LINE AND JUST SIMPLE DESIGN OF PAGE FOR SMALL DIVICES */}

            <div className='product-line'>
                <div className='main-line'>
                    <div className='dot-container'>
                        <div className='blue-dot'></div>
                    </div>
                    <div className='dot-container'>
                        <div className='red-dot'></div>
                    </div>
                    <div className='dot-container'>
                        <div className='long-line'></div>
                    </div>
                    <div className='dot-container'>
                        <p>O5</p>
                    </div>
                </div>
            </div>

            <div className='both-parts'>

                {/* Product Displaying Work (ALL IMAGES OF PRODUCT) */}

                <div className='part-1'>

                    <div className='all-images-of-product'>
                        {images.map((image) => {
                            return (
                                <div onClick={() => setActiveImg(image)} className={`image-container ${image === activeImg && "image-container-active-image"}`}>
                                    <img src={image} alt="product-info" />
                                </div>
                            )
                        })}
                    </div>

                    <div className='part-one-container-img'>
                        <div className='product-image'>
                            <img src={images && activeImg} alt="product-image" />
                        </div>
                    </div>

                </div>


                {/* Product Information */}
                <div className='part-2'>

                    <div>

                        {/* ABOUT PRODUCT */}

                        <div className='part-two-container'>
                            <p className='part-two-category'>{category}</p>
                            <p className='part-two-name'>{name}</p>
                            <p className='part-two-price'>{price} UZS</p>
                        </div>

                        <div className='part-two-container'>
                            <p className='part-two-description'>Description:</p>
                            <p className='part-two-text'>{descuz}</p>
                        </div>

                        {/* BUTTONS */}

                        <div className='product-buttons-container'>

                            <div className='product-buttons'>
                                <button>
                                    <AiOutlinePlus fontSize={20} />
                                </button>
                                <p>0</p>
                                <button>
                                    <AiOutlineMinus fontSize={20} />
                                </button>
                            </div>

                            <div className='size'>
                                <select name="" id="">
                                    <option value="">S</option>
                                    <option value="">M</option>
                                    <option value="">L</option>
                                    <option value="">XS</option>
                                    <option value="">XM</option>
                                    <option value="">XL</option>
                                    <option value="">XXL</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    {/* ADDITIONAL LINE AND JUST SIMPLE DESIGN OF PAGE FOR LARGE DIVICES */}

                    <div className='product-main-line'>
                        <div className='product-main-product'>
                            <div className='dot-main-container'>
                                <div className='dot-one'></div>
                            </div>
                            <div className='dot-main-container'>
                                <div className='dot-two'></div>
                            </div>
                            <div className='dot-main-container'>
                                <div className='gray-line-of-product'></div>
                            </div>
                            <div className='dot-main-container'>
                                <p>05</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default ProductInfo