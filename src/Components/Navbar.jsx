import React from 'react';
import { TiThMenu } from "react-icons/ti";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { useGlobalContext } from '../Context/context';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { language } from '../Functions/language';

const Navbar = () => {
    const { setNav, activeLanguage } = useGlobalContext();
    const { totalNumberOfItems } = useSelector((state) => state.cartItems)
    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-box'>
                    <div onClick={() => setNav(true)} className='nav'>
                        <TiThMenu fontSize={20} />
                    </div>
                    <Link to={'/search'} className='search'>
                        <AiOutlineSearch />
                    </Link>
                </div>
                <div className='navbar-box'>
                    <Link to={'/account'} className='account'>
                        <p>{language(activeLanguage).account}</p>
                    </Link>
                    <Link to={'/cartItem'} className='box'>
                        <AiOutlineShopping fontSize={30} />
                    </Link>
                    <div className='count-product'><p>{totalNumberOfItems}</p></div>
                </div>
            </div>
        </>
    )
}

export default Navbar