import 'aos/dist/aos.css';
import { TiThMenu } from "react-icons/ti";
import React, { useState, useEffect } from 'react';
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";

import "../Style/catalogue.css";
import "../Style/footer.css";

import { AllClothes, Filter, SmallFooter } from '../Components';
import { Link } from 'react-router-dom';

const Catalogue = () => {

    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {

        // Diable scroll 
        if (sidebar) {
            document.body.classList.add('disable-scroll');
        }

        // Enable scroll
        if (!sidebar) {
            document.body.classList.remove('disable-scroll');
        }

    }, [sidebar])

    return (
        <>
            {sidebar && (
                <div className='catalogue-cover'></div>
            )}

            <div className='both-catalogue'>

                <Filter sidebar={sidebar} setSidebar={setSidebar} />

                <div className='catalogue'>

                    <div className='above-nav-container'>

                        {/* FIRST CATALOGUE */}

                        <nav className='above-nav'>

                            {/* MENU  */}

                            <div onClick={() => setSidebar(true)} className='nav-filter'>
                                <TiThMenu fontSize={20} />
                            </div>

                            <div className='big-screen-nothing'></div>

                            <ul className='language'>
                                <p className='active'>Eng</p>
                                <p className='no-active'>Ru</p>
                                <p className='no-active'>Uz</p>
                            </ul>
                        </nav>

                        {/* SECOND CATALOGUE */}

                        <div className='home-catalogue-nav'>

                            <div className='catalogue-one'>
                                <Link style={{ textDecoration: 'none' }} to={'/'}>
                                    <p className='no-active'>Home</p>
                                </Link>
                                <div className='catalogue-dot'>
                                    <p className='active'>Catalogue</p>
                                    <div className='dot'></div>
                                </div>
                            </div>

                            <div className='catalogue-two'>
                                <div className='catalogue-search'>
                                    <AiOutlineSearch fontSize={30} />
                                </div>
                                <div className='catalogue-box'>
                                    <AiOutlineShopping fontSize={30} />
                                </div>
                                <div className='catalogue-box-count-product'><p>3</p></div>
                            </div>

                        </div>

                        <AllClothes />

                    </div>

                </div>

            </div>

            <SmallFooter />

        </>

    );
};

export default Catalogue;
