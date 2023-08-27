import React, { useEffect, useState } from 'react';
import '../Style/ship.css';
import { useGlobalContext } from '../Context/context';
import { useNavigate } from 'react-router-dom';
import { AiFillBackward } from "react-icons/ai";

const ShippingInfo = () => {

    const { ship, languages, setActiveLanguage, activeLanguage } = useGlobalContext();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Local
    useEffect(() => {

        // Diable scroll 
        if (ship) {
            document.body.classList.add('disable-cart-scroll');
        }

        // Enable scroll
        if (!ship) {
            document.body.classList.remove('disable-cart-scroll');
        }

    }, [ship])

    // Go Back
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className={`ship-subject ${!ship ? 'close' : ''}`}>

            {/* First Navbar */}

            <nav className='single-product-nav-one'>
                <div className='logo-title'>
                    <h3>Shipping Info</h3>
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

            <div>
                <hr className='straight-line' />
            </div>

            <div className='shipping__container'>

                {loading ? (
                    <div className='shipping__loading__container'>
                        <div className="shipping__loading"></div>
                    </div>
                ) : (
                    <div className='shipping__box'>
                        <div className='shipping__input'>
                            <label htmlFor="">First Name</label>
                            <input type="text" />
                        </div>
                        <div className='shipping__input'>
                            <label htmlFor="">Phone Number</label>
                            <input type="number" />
                        </div>
                        <div className='shipping__input'>
                            <label htmlFor="">District</label>
                            <select name="" id="">
                                <option value="">Sergeli</option>
                                <option value="">Yangi Hayot</option>
                            </select>
                        </div>
                        <div className='shipping__input'>
                            <label htmlFor="">Address</label>
                            <input type="text" />
                        </div>
                    </div>
                )}

            </div>

            <div className='center-next-cart-buttons'>
                <div className='next-cart-buttons'>
                    <button onClick={handleBack}><AiFillBackward className='back-icon-small' /> Back</button>
                    <button>Continue</button>
                </div>
            </div>


        </div>
    )
}

export default ShippingInfo