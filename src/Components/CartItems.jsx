import React, { useEffect } from 'react';

// Icons
import { AiFillHome, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// Global Imports
import { useGlobalContext } from '../Context/context';

// Styles
import "../Style/cart.css";

const CartItems = () => {

    // Global
    const { languages, cart, setCart, setActiveLanguage, activeLanguage } = useGlobalContext();

    // Local
    useEffect(() => {

        // Diable scroll 
        if (cart) {
            document.body.classList.add('disable-scroll');
        }

        // Enable scroll
        if (!cart) {
            document.body.classList.remove('disable-scroll');
        }

    }, [cart])

    return (

        <div className={`cart-subject ${!cart ? 'close' : ''}`}>

            {/* First Navbar */}

            <nav className='single-product-nav-one'>
                <div className='logo-title'>
                    <h3>#Hello World</h3>
                </div>
                <ul className='language'>
                    {languages.map((language, index) => (
                        <p
                            key={index}
                            onClick={() => setActiveLanguage(language)}
                            className={language === activeLanguage ? 'active' : 'no-active'}
                        >
                            {language}
                        </p>
                    ))}
                </ul>
            </nav>

            {/* TOP INFORMATION ABOUT TOTAL CARD */}

            <div className='total-card-navbar'>
                <div className='total-card-navbar-tems'>
                    <h3>Your Cart</h3>
                </div>
                <div className='total-card-navbar-tems'>
                    <p className='cart-items-number'>3 items</p>
                </div>
                <div className='total-card-navbar-tems'>
                    <h3><span className='total-items-number'>Total: </span> 350 000 000 UZS</h3>
                </div>
            </div>

            {/* Line */}

            <div>
                <hr className='straight-line' />
            </div>

            {/* Go back button for cartItems */}

            <div onClick={() => setCart(false)} className='back-card-one'>
                <AiFillHome />
            </div>

            <div>
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

                </div>
            </div>

        </div>
    )
}

export default CartItems