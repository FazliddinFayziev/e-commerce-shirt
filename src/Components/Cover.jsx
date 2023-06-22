import React, { useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from '../Context/context';

const Cover = () => {

    // Global

    const { nav, setNav } = useGlobalContext();

    // Local
    useEffect(() => {

        // Diable scroll 
        if (nav) {
            document.body.classList.add('disable-scroll');
        }

        // Enable scroll
        if (!nav) {
            document.body.classList.remove('disable-scroll');
        }

    }, [nav])

    return (
        <div className={`cover-subject ${!nav ? 'close' : ''}`}>
            <AiOutlineClose onClick={() => setNav(false)} className='close-btn' fontSize={30} />
            <h3 className='menu-text'>Menu</h3>
            <div className='nav-container'>

                <div className='nav-item'>
                    <p className='nav-text'>Categories:</p>
                    <div className='nav-small-text'>
                        <p>Simple</p>
                        <p>Humble</p>
                        <p>Elegant</p>
                    </div>
                </div>

                <div className='nav-item'>
                    <p className='nav-text'>Content:</p>
                    <div className='nav-small-text'>
                        <p>Home</p>
                        <p>Popular</p>
                        <p>Blog</p>
                    </div>
                </div>

                <div className='nav-item'>
                    <p className='nav-text'>Social:</p>
                    <div className='nav-small-text'>
                        <p>Instagram</p>
                        <p>Telegram</p>
                        <p>Facebook</p>
                    </div>
                </div>

                <div className='nav-item'>
                    <p className='nav-text'>Language:</p>
                    <div className='nav-small-text'>
                        <p>English</p>
                        <p>Russian</p>
                        <p>Uzbek</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover