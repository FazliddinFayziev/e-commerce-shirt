import React, { useEffect } from 'react';

// Icons
import { AiFillBackward } from "react-icons/ai";

// Global Imports
import { useGlobalContext } from '../Context/context';

// Styles
import "../Style/cart.css";
import SingleItem from './SingleItem';

const CartItems = () => {

    // Global
    const { languages, cart, setCart, setActiveLanguage, activeLanguage } = useGlobalContext();

    // Local
    useEffect(() => {

        // Diable scroll 
        if (cart) {
            document.body.classList.add('disable-cart-scroll');
        }

        // Enable scroll
        if (!cart) {
            document.body.classList.remove('disable-cart-scroll');
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

            {/* Item PRODUCTS of CARD  */}

            <div className='cartItems-all'>
                <SingleItem />
                <SingleItem />
                <SingleItem />
                <SingleItem />
            </div>

            <div className='center-next-cart-buttons'>
                <div className='next-cart-buttons'>
                    <button onClick={() => setCart(false)}> <AiFillBackward className='back-icon-small' /> Back</button>
                    <button>Continue</button>
                </div>
            </div>

        </div>
    )
}

export default CartItems