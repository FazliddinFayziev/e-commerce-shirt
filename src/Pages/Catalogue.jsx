// Catalogue.jsx
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGlobalContext } from '../Context/context';
import { Link } from 'react-router-dom';
import { AiFillFilter, AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import { fetchProducts } from '../Container/productSlice';
import { AllClothes, Filter, SmallFooter } from '../Components';
import { filterOptions, filterCategory, filterActiveProduct, filterAvailableOptions, filterColors } from '../Functions/functions';

import '../Style/catalogue.css';
import '../Style/footer.css';
import { language } from '../Functions/language';

const Catalogue = () => {
    const { activeLanguage, changeLanguage, languages } = useGlobalContext();
    const { totalNumberOfItems } = useSelector((state) => state.cartItems);

    const [sidebar, setSidebar] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeOptions, setActiveOptions] = useState('All');
    const [activeColor, setActiveColor] = useState('All');
    const [colors, setColors] = useState([]);
    const [option, setOption] = useState([]);
    const [category, setCategory] = useState([]);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [availableOptions, setAvailableOptions] = useState([]);

    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    useEffect(() => {
        setCurrentProducts(filterActiveProduct(activeCategory, activeOptions, activeColor, products));
        setAvailableOptions(filterAvailableOptions(activeCategory, products))
    }, [activeCategory, activeOptions, activeColor, products]);

    useEffect(() => {
        setOption(filterOptions(availableOptions));
        setCategory(filterCategory(products));
        setColors(filterColors(availableOptions));
    }, [products, currentProducts]);

    useEffect(() => {
        if (sidebar) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }
    }, [sidebar]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            {sidebar && <div className='catalogue-cover'></div>}

            <div className='both-catalogue'>
                <Filter
                    colors={colors}
                    options={option}
                    sidebar={sidebar}
                    categories={category}
                    setSidebar={setSidebar}
                    activeColor={activeColor}
                    activeOptions={activeOptions}
                    activeCategory={activeCategory}
                    setActiveColor={setActiveColor}
                    setActiveOptions={setActiveOptions}
                    setActiveCategory={setActiveCategory}
                />

                <div className='catalogue'>
                    <div className='above-nav-container'>
                        <nav className='above-nav'>
                            <div onClick={() => setSidebar(true)} className='nav-filter'>
                                <AiFillFilter fontSize={20} />
                            </div>

                            <div className='big-screen-nothing'></div>

                            <ul className='language'>
                                {languages.map((language, index) => (
                                    <p
                                        key={index}
                                        onClick={() => changeLanguage(language)}
                                        className={language === activeLanguage ? 'active' : 'no-active'}
                                    >
                                        {language}
                                    </p>
                                ))}
                            </ul>
                        </nav>

                        <div className='home-catalogue-nav'>
                            <div className='catalogue-one'>
                                <Link style={{ textDecoration: 'none' }} to={'/'}>
                                    <p className='no-active'>Home</p>
                                </Link>
                                <div className='catalogue-dot'>
                                    <p className='active'>{language(activeLanguage).catalogue}</p>
                                    <div className='dot'></div>
                                </div>
                            </div>

                            <div className='catalogue-two'>
                                <div className='catalogue-search'>
                                    <Link to={'/search'} className='search'>
                                        <AiOutlineSearch fontSize={30} />
                                    </Link>
                                </div>
                                <Link to={'/cartItem'} className='catalogue-box'>
                                    <AiOutlineShopping fontSize={30} />
                                </Link>
                                <div className='catalogue-box-count-product'><p>{totalNumberOfItems}</p></div>
                            </div>
                        </div>

                        <AllClothes loading={loading} products={currentProducts} error={error} />
                    </div>
                </div>
            </div>

            <SmallFooter />
        </>
    );
};

export default Catalogue;
