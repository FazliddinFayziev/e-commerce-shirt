import React from 'react';
import { Route, Routes } from 'react-router-dom';

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
import "../Style/slider.css";
import "../Style/navbar.css";
import "../Style/popular.css";
import "../Style/LogoTitle.css";

// Main Home Page

const Home = () => {
    return (
        <>
            <Navbar />
            <LogoTitle />
            <HerroBanner />
            <Routes>
                <Route path='/' element={<MostPoppular />} />
                <Route path='/humble' element={<HumbleProducts />} />
                <Route path='/elegant' element={<PopularElegant />} />
            </Routes>
            <Blog />
            <Footer />
        </>
    )
}

// Exporting Home Component

export default Home