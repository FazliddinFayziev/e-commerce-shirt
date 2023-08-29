import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/context';

const AccountNavbar = () => {

    // Global

    const { languages, activeLanguage, setActiveLanguage } = useGlobalContext();
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        const orders = JSON.parse(localStorage.getItem('orderData')) || [];
        setAllOrders(orders);
    }, [])

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
                    <p style={{ fontWeight: 500 }}><span style={{ color: '#7FC0FC', fontWeight: 800 }}>{allOrders.length}</span> Orders</p>
                </div>

            </div>
        </>
    )
}

export default AccountNavbar