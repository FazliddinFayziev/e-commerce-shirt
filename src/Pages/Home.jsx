import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components

import {
    Blog,
    Cover,
    Navbar,
    Footer,
    Loading,
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

    // Local

    const [isLoading, setIsLoading] = useState(true);

    // setTimeOut

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2500);
    }, [])

    // Loading before start

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <Cover />
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