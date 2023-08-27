import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../Context/context';
import { AiFillFilter, AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";



// Styles

import "../Style/catalogue.css";
import "../Style/footer.css";

// Components

import { AllClothes, Filter, Loading, SmallFooter } from '../Components';
import { useSelector } from 'react-redux';


const Catalogue = () => {

    // Global

    const { activeLanguage, setActiveLanguage, languages } = useGlobalContext();

    // Local

    const categories = ["All", "Simple", "Humble", "Elegant"]
    const options = ["All", "Python", "Java", "React", "C#"]

    const [sidebar, setSidebar] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeOptions, setActiveOptions] = useState("All");
    const { totalNumberOfItems } = useSelector((state) => state.cartItems);

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

    // Main

    return (
        <>
            {sidebar && (
                <div className='catalogue-cover'></div>
            )}

            <div className='both-catalogue'>

                {/* Filter */}

                <Filter
                    options={options}
                    sidebar={sidebar}
                    categories={categories}
                    setSidebar={setSidebar}
                    activeOptions={activeOptions}
                    activeCategory={activeCategory}
                    setActiveOptions={setActiveOptions}
                    setActiveCategory={setActiveCategory}
                />

                <div className='catalogue'>

                    <div className='above-nav-container'>

                        {/* FIRST CATALOGUE */}

                        <nav className='above-nav'>

                            {/* MENU  */}

                            <div onClick={() => setSidebar(true)} className='nav-filter'>
                                <AiFillFilter fontSize={20} />
                            </div>

                            <div className='big-screen-nothing'></div>

                            <ul className='language'>
                                {languages.map((language, index) => (
                                    <p
                                        key={index}
                                        onClick={() => setActiveLanguage(language)}
                                        className={language === activeLanguage ? 'active' : 'no-active'}
                                    >
                                        {language}
                                    </p>
                                ))}
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
                                <Link to={'/cartItem'} className='catalogue-box'>
                                    <AiOutlineShopping fontSize={30} />
                                </Link>
                                <div className='catalogue-box-count-product'><p>{totalNumberOfItems}</p></div>
                            </div>

                        </div>

                        {/* ALL CLOTHES */}

                        <AllClothes />

                    </div>

                </div>

            </div>

            {/* Footer */}

            <SmallFooter />

        </>

    );
};

export default Catalogue;
