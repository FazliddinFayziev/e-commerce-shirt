import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/context';
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { useSelector } from 'react-redux';

const SmallNavbar = () => {

    // Global

    const { languages, activeLanguage, setActiveLanguage } = useGlobalContext();
    const { totalNumberOfItems } = useSelector((state) => state.cartItems);

    // Main 

    return (
        <>

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

            {/* Second Navbar */}

            <div className='home-catalogue-nav'>

                <div className='navbar-one'>
                    <Link style={{ textDecoration: 'none' }} to={'/'}>
                        <p className='no-active'>Home</p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={'/catalogue'}>
                        <p className='no-active'>Catalogue</p>
                    </Link>
                    <div className='catalogue-dot'>
                        <p className='active'>Product</p>
                        <div className='dot'></div>
                    </div>
                </div>

                <div className='catalogue-two'>
                    <div className='catalogue-search'>
                        <AiOutlineSearch fontSize={30} />
                    </div>
                    <Link to={'/cartItem'} className='catalogue-box'>
                        <AiOutlineShopping fontSize={30} />
                    </Link>
                    <div className='catalogue-box-count-product'><p>{totalNumberOfItems}</p></div>
                </div>

            </div>
        </>
    )
}

export default SmallNavbar