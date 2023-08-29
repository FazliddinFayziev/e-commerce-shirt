import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

// redux related
import { useDispatch, useSelector } from 'react-redux';
import { fetchBanner } from '../Container/bannerSlice';

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

    // redux related
    const { loading, banner } = useSelector((state) => state.banner);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBanner())
    }, [])

    // Global

    useEffect(() => {
        AOS.init();
    }, [])

    if (loading) {
        return <Loading />
    }

    // Main

    return (
        <>
            <Cover />
            <div className='main-subject'>
                <Navbar />
                <LogoTitle />
                <HerroBanner banner={banner} />
                <div id='popular' className='products'>
                    <MostPoppular />
                </div>
                <Blog />
                <Footer />
            </div>
        </>
    )
}

// Exporting Home Component

export default Home