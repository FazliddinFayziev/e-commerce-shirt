import React, { useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from '../Context/context';
import { useNavigate } from 'react-router-dom';

const Cover = () => {

    // Global

    const { nav, setNav, languages, changeLanguage } = useGlobalContext();
    const navigate = useNavigate();

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

    const handleCatalogue = () => {
        navigate('/catalogue')
        setNav(false)
    }

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });
            });
        });
    }, [])

    return (
        <div className={`cover-subject ${!nav ? 'close' : ''}`}>
            <AiOutlineClose onClick={() => setNav(false)} className='close-btn' fontSize={30} />
            <h3 className='menu-text'>Menu</h3>
            <div className='nav-container'>

                <div className='nav-item'>
                    <p className='nav-text'>Categories:</p>
                    <div className='nav-small-text'>
                        <p onClick={handleCatalogue}>Simple</p>
                        <p onClick={handleCatalogue}>Humble</p>
                        <p onClick={handleCatalogue}>Elegant</p>
                    </div>
                </div>

                <div className='nav-item'>
                    <p className='nav-text'>Content:</p>
                    <div className='nav-small-text'>
                        <a onClick={() => setNav(false)} href="#home">
                            <p>Home</p>
                        </a>
                        <a onClick={() => setNav(false)} href="#popular">
                            <p>Popular</p>
                        </a>
                        <a onClick={() => setNav(false)} href="#blog">
                            <p>Blog</p>
                        </a>
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
                        <p onClick={() => { changeLanguage(languages[0]); setNav(false) }}>
                            English</p>
                        <p onClick={() => { changeLanguage(languages[1]); setNav(false) }}>
                            Russian
                        </p>
                        <p onClick={() => { changeLanguage(languages[2]); setNav(false) }}>
                            Uzbek
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover