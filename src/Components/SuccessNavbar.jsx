import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/context';

const SuccessNavbar = () => {

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
        </>
    )
}

export default SuccessNavbar