import React from 'react';

// Icons
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { FcNext } from "react-icons/fc";

// Main function

const SingleItem = () => {
    return (
        <>

            {/* Dektop Version */}

            <div className='single-cart'>
                {/* Close Icon */}

                <div className='close-cart-icon'>
                    <AiOutlineClose fontSize={25} />
                </div>

                <div className='single-card-product'>

                    {/* Product Image */}

                    <div className='products-card-image'>
                        <img src="https://res.cloudinary.com/djijmzccq/image/upload/v1685870848/node-small_shyobp.jpg" alt="product-image" />
                    </div>

                    {/* Product Information */}

                    <div className='product-card-description'>
                        <h3>AWS T-Shirt</h3>
                        <p>Humble</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, sequi?</p>
                    </div>

                    {/* Quantity Information */}

                    <div className='quantity'>
                        <p className='quantity-title'>Quantity:</p>
                        <div className='product-card-buttons'>
                            <button>
                                <AiOutlinePlus fontSize={20} />
                            </button>
                            <p>0</p>
                            <button>
                                <AiOutlineMinus fontSize={20} />
                            </button>
                        </div>
                    </div>

                    {/* Size Information */}

                    <div className='product-card-size'>
                        <p className='size-title'>Size:</p>
                        <div className='size-card'>
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

                    {/* Narxlar */}

                    <div className='price-cart'>
                        <p className='price-title'>Price:</p>
                        <h3>20 000 UZS</h3>
                    </div>

                </div>
            </div>

            {/* Phone version ===============================> */}

            <div className='small-cart'>
                <div className='small-single-cart'>

                    <div className='close-icon-small-cart'>
                        <AiOutlineClose fontSize={15} />
                    </div>

                    {/* Image  */}

                    <div className='small-single-project-image'>
                        <img src="https://res.cloudinary.com/djijmzccq/image/upload/v1685870848/node-small_shyobp.jpg" alt="product-image" />
                    </div>

                    {/* PRODUCT TITLE */}

                    <div className='small-cart-title'>
                        <p>AWS T-Shirt</p>
                        <div className='small-cart-size'>
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
                        <div>
                            <p className='small-cart-price'>
                                200 000 UZS
                            </p>
                        </div>
                    </div>

                    {/* Category */}

                    <div className='category-small-cart-title'>Humble</div>


                    {/* Counting product numbers */}

                    <div className='play-with-small-cart'>
                        <button className='increment'><FcNext /></button>
                        <div className='display-small-number'>
                            <p>0</p>
                        </div>
                        <button className='decrement'><FcNext /></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SingleItem