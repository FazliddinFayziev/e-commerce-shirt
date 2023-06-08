import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { Route, Routes } from 'react-router-dom';
import { useGlobalContext } from '../Context/context';

// Components

import {
    Blog,
    Navbar,
    Footer,
    LogoTitle,
    HerroBanner,
    MostPoppular,
    HumbleProducts,
    PopularElegant,
} from '../Components';

// Style

import "../Style/blog.css";
import "../Style/footer.css";
import "../Style/slider.css";
import "../Style/navbar.css";
import "../Style/popular.css";
import "../Style/LogoTitle.css";


// Main Home Page

const Home = () => {

    // Global

    const { nav, setNav } = useGlobalContext();

    useEffect(() => {
        AOS.init();
    }, [])

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
        <>
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
            <div className='main-subject'>
                <Navbar />
                <LogoTitle />
                <HerroBanner />
                <div id='popular' className='products'>
                    <Routes>
                        <Route path='/' element={<MostPoppular />} />
                        <Route path='/humble' element={<HumbleProducts />} />
                        <Route path='/elegant' element={<PopularElegant />} />
                    </Routes>
                </div>
                <Blog />
                <Footer />
            </div>
        </>
    )
}

// Exporting Home Component

export default Home