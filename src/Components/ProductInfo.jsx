import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import SmallLoading from './SmallLoading';
import { useGlobalContext } from '../Context/context';

// redux related imports
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../Container/singleProductSlice';

// card Items functions
import { addToCart, removeFromCart, updateQuantity } from '../Container/cartSlice';

const ProductInfo = () => {

    // Global
    const { setShow, setCartMessage } = useGlobalContext();

    const { productId } = useParams();
    const [activeImg, setActiveImg] = useState('');
    const [count, setCount] = useState(1);


    // redux related
    const { loading, singleProduct, error } = useSelector((state) => state.singleProduct);
    const { category, colors, images, name, desceng, descuz, descru, price, size } = singleProduct;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleProduct(productId))
    }, [])

    useEffect(() => {
        setActiveImg(images && images.length > 0 ? images[0] : '');
    }, [singleProduct]);


    // ADD PRODUCT TO CARD
    const addItemToCart = () => {
        const newItem = { id: productId, image: images[0], name, category, description: desceng, quantity: count, size, price };
        dispatch(addToCart(newItem));
        setCartMessage({ type: 'success', msg: 'Product is added successfully' })
        setShow(true)
    };

    // UPDATE PRODUCT 
    const updateItemQuantity = () => {
        setCount(count + 1);
    };

    // Decrease PRODUCT 
    const decreseItemQuantity = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    if (loading) {
        return <SmallLoading />
    }

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
                        {images && images.length > 0 && images.map((image) => (
                            <div
                                key={image}
                                onClick={() => setActiveImg(image)}
                                className={`image-container ${image === activeImg && "image-container-active-image"}`}
                            >
                                <img src={image} alt="product-info" />
                            </div>
                        ))}
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
                                <button onClick={decreseItemQuantity}>
                                    <AiOutlineMinus fontSize={20} />
                                </button>
                                <p>{count}</p>
                                <button onClick={updateItemQuantity}>
                                    <AiOutlinePlus fontSize={20} />
                                </button>
                            </div>

                            <div className='size'>
                                <select name="" id="">
                                    {size && size.length && size.map((single_size, index) => {
                                        return (
                                            <option key={index} value="">{single_size}</option>
                                        )
                                    })}

                                </select>
                            </div>

                        </div>

                        <div onClick={addItemToCart} className='add__to__card'>
                            <button>Add to Card</button>
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