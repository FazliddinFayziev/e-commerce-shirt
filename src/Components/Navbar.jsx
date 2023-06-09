import React from 'react';
import { TiThMenu } from "react-icons/ti";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { useGlobalContext } from '../Context/context';

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
                    <div className='account'>
                        <p>Account</p>
                    </div>
                    <div className='box'>
                        <AiOutlineShopping fontSize={30} />
                    </div>
                    <div className='count-product'><p>3</p></div>
                </div>
            </div>
        </>
    )
}

export default Navbar