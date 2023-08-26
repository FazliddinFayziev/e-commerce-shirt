import React from 'react';
import { TiThMenu } from "react-icons/ti";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { useGlobalContext } from '../Context/context';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { setNav } = useGlobalContext();
    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-box'>
                    <div onClick={() => setNav(true)} className='nav'>
                        <TiThMenu fontSize={20} />
                    </div>
                    <div className='search'>
                        <AiOutlineSearch />
                    </div>
                </div>
                <div className='navbar-box'>
                    <Link to={'/account'} className='account'>
                        <p>Account</p>
                    </Link>
                    <Link to={'/cartItem'} className='box'>
                        <AiOutlineShopping fontSize={30} />
                    </Link>
                    <div className='count-product'><p>3</p></div>
                </div>
            </div>
        </>
    )
}

export default Navbar