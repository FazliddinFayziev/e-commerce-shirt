import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductInfo = () => {
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
                        <div className='image-container'>
                            <img src="https://res.cloudinary.com/djijmzccq/image/upload/v1685870848/node-small_shyobp.jpg" alt="product-info" />
                        </div>
                        <div className='image-container'>
                            <img src="https://res.cloudinary.com/djijmzccq/image/upload/v1685870848/node-small_shyobp.jpg" alt="product-info" />
                        </div>
                        <div className='image-container'>
                            <img src="https://res.cloudinary.com/djijmzccq/image/upload/v1685870848/node-small_shyobp.jpg" alt="product-info" />
                        </div>
                    </div>

                    <div className='part-one-container-img'>
                        <div className='product-image'>
                            <img src="https://res.cloudinary.com/djijmzccq/image/upload/v1685870848/node-small_shyobp.jpg" alt="product-image" />
                        </div>
                    </div>

                </div>


                {/* Product Information */}
                <div className='part-2'>

                    <div>

                        {/* ABOUT PRODUCT */}

                        <div className='part-two-container'>
                            <p className='part-two-category'>Humble</p>
                            <p className='part-two-name'>AWS-Developers T-Shirt</p>
                            <p className='part-two-price'>120 000 UZS</p>
                        </div>

                        <div className='part-two-container'>
                            <p className='part-two-description'>Description:</p>
                            <p className='part-two-text'>The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</p>
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