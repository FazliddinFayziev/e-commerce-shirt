import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/context';
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";

const AccountNavbar = () => {

    // Global

    const { languages, activeLanguage, setActiveLanguage } = useGlobalContext();

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
                    <div className='catalogue-dot'>
                        <p className='active'>Account</p>
                        <div className='dot'></div>
                    </div>
                </div>

                <div className='catalogue-two'>
                    <p style={{ fontWeight: 500 }}><span style={{ color: '#7FC0FC', fontWeight: 800 }}>25</span> Orders</p>
                </div>

            </div>
        </>
    )
}

export default AccountNavbar