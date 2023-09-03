import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/context';
import { language } from '../Functions/language';

const SmallSearchNavbar = () => {

    // Global

    const { languages, activeLanguage, changeLanguage } = useGlobalContext();

    // Main 

    return (
        <>

            {/* First Navbar */}

            <nav className='single-product-nav-one'>
                <div className='logo-title'>
                    <Link style={{ textDecoration: 'none', color: '#000' }} to={'/'}>
                        <h3>#Hello World</h3>
                    </Link>
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

            {/* Second Navbar */}

            <div className='home-catalogue-nav'>

                <div className='navbar-one'>
                    <Link style={{ textDecoration: 'none' }} to={'/'}>
                        <p className='no-active'>Home</p>
                    </Link>
                    <div className='catalogue-dot'>
                        <p className='active'>{language(activeLanguage).search}</p>
                        <div className='dot'></div>
                    </div>
                </div>

                <div className='catalogue-two'></div>

            </div>
        </>
    )
}

export default SmallSearchNavbar