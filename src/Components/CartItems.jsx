import React, { useEffect } from 'react';

// Icons
import { AiFillBackward } from "react-icons/ai";
import { BsFillBasket3Fill } from "react-icons/bs";

// Global Imports
import { useGlobalContext } from '../Context/context';

// Styles
import "../Style/cart.css";
import SingleItem from './SingleItem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatPrice } from '../Functions/functions';
import { language } from '../Functions/language';

const CartItems = () => {

    // Global
    const { languages, cart, changeLanguage, activeLanguage } = useGlobalContext();
    const navigate = useNavigate();

    // redux related
    const { cartItems, totalPrice, totalNumberOfItems } = useSelector((state) => state.cartItems);

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

    // Go Back
    const handleBack = () => {
        navigate(-1);
    }

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
                            onClick={() => changeLanguage(language)}
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
                    <h3>{language(activeLanguage).cart}</h3>
                </div>
                <div className='total-card-navbar-tems'>
                    <p className='cart-items-number'>{totalNumberOfItems} {language(activeLanguage).items}</p>
                </div>
                <div className='total-card-navbar-tems'>
                    <h3><span className='total-items-number'>{language(activeLanguage).total}: </span> {formatPrice(totalPrice)} UZS</h3>
                </div>
            </div>

            {/* Line */}

            <div>
                <hr className='straight-line' />
            </div>

            {/* Item PRODUCTS of CARD  */}

            <div className='cartItems-all'>
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <SingleItem key={index} item={item} />
                    ))
                ) : (
                    <div className='there__is__no__product'>
                        <div>
                            <div className='no_product_icon'>
                                <BsFillBasket3Fill fontSize={40} />
                            </div>
                            <p>
                                {language(activeLanguage).no_yet}
                            </p>
                        </div>
                    </div>
                )}

            </div>

            <div className='center-next-cart-buttons'>
                <div className='next-cart-buttons'>
                    <button onClick={handleBack}> <AiFillBackward className='back-icon-small' /> {language(activeLanguage).back}</button>
                    {
                        cartItems.length > 0 && (
                            <Link to={'/shipping'} style={{ textDecoration: 'none' }}>
                                <button>{language(activeLanguage).continuing}</button>
                            </Link>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default CartItems