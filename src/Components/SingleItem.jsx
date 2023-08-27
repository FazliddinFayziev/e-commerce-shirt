import React from 'react';

// redux related
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, decreaseQuantity } from '../Container/cartSlice';

// Icons
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { FcNext } from "react-icons/fc";
import { useGlobalContext } from '../Context/context';
import { formatPrice } from '../Functions/functions';

// Main function

const SingleItem = ({ item }) => {

    const { setShow, setCartMessage } = useGlobalContext();

    const dispatch = useDispatch();

    // UpdateItemQuantity
    const updateItemQuantity = (itemId) => {
        dispatch(updateQuantity({ itemId }));
    };

    // DecreaseItemQuantity
    const decreaseItemQuantity = (itemId) => {
        dispatch(decreaseQuantity({ itemId }));
    }

    // removeItemFromCart
    const revomeItemFromCart = (itemId) => {
        dispatch(removeFromCart({ itemId }));
        setCartMessage({ type: 'info', msg: 'Product is deleted successfully' })
        setShow(true)
    }

    return (
        <>

            {/* Dektop Version */}

            <div className='single-cart'>
                {/* Close Icon */}

                <div onClick={() => revomeItemFromCart(item.id)} className='close-cart-icon'>
                    <AiOutlineClose fontSize={25} />
                </div>

                <div className='single-card-product'>

                    {/* Product Image */}

                    <div className='products-card-image'>
                        <img src={item.image} alt="product-image" />
                    </div>

                    {/* Product Information */}

                    <div className='product-card-description'>
                        <h3>{item.name}</h3>
                        <p>{item.category}</p>
                        <p>{item.description.slice(0, 100)}...</p>
                    </div>

                    {/* Quantity Information */}

                    <div className='quantity'>
                        <p className='quantity-title'>Quantity:</p>
                        <div className='product-card-buttons'>
                            <button onClick={() => decreaseItemQuantity(item.id)}>
                                <AiOutlineMinus fontSize={20} />
                            </button>
                            <p>{item.quantity}</p>
                            <button onClick={() => updateItemQuantity(item.id)}>
                                <AiOutlinePlus fontSize={20} />
                            </button>
                        </div>
                    </div>

                    {/* Size Information */}

                    <div className='product-card-size'>
                        <p className='size-title'>Size:</p>
                        <div className='size-card'>
                            <select name="" id="">
                                {item.size && item.size.length > 0 && item.size.map((single_size, index) => {
                                    return (
                                        <option key={index} value="">{single_size}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                    {/* Narxlar */}

                    <div className='price-cart'>
                        <p className='price-title'>Price:</p>
                        <h3>{formatPrice(item.price)} UZS</h3>
                    </div>

                </div>
            </div>

            {/* Phone version ===============================> */}

            <div className='small-cart'>
                <div className='small-single-cart'>

                    <div onClick={() => revomeItemFromCart(item.id)} className='close-icon-small-cart'>
                        <AiOutlineClose fontSize={15} />
                    </div>

                    {/* Image  */}

                    <div className='small-single-project-image'>
                        <img src={item.image} alt="product-image" />
                    </div>

                    {/* PRODUCT TITLE */}

                    <div className='small-cart-title'>
                        <p>{item.name}</p>
                        <div className='small-cart-size'>
                            <select name="" id="">
                                {item.size && item.size.length > 0 && item.size.map((single_size, index) => {
                                    return (
                                        <option key={index} value="">{single_size}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <p className='small-cart-price'>
                                {formatPrice(item.price)} UZS
                            </p>
                        </div>
                    </div>

                    {/* Category */}

                    <div className='category-small-cart-title'>{item.category}</div>


                    {/* Counting product numbers */}

                    <div className='play-with-small-cart'>
                        <button onClick={() => updateItemQuantity(item.id)} className='increment'><FcNext /></button>
                        <div className='display-small-number'>
                            <p>{item.quantity}</p>
                        </div>
                        <button onClick={() => decreaseItemQuantity(item.id)} className='decrement'><FcNext /></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SingleItem