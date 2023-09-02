import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { language } from '../Functions/language';
import { useGlobalContext } from '../Context/context';

const Slider = ({ banner }) => {

    const { activeLanguage } = useGlobalContext();

    // UseState() 

    const [currentSlide, setCurrentSlide] = useState(0);

    // PADINATION Logic

    const SliderPagination = ({ currentSlide, totalSlides }) => {
        const dots = Array.from({ length: totalSlides }, (_, index) => (
            <span
                key={index}
                className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
            ></span>
        ));

        return <div className="pagination">{dots}</div>;
    };

    // Categories Logic

    const SliderCategories = ({ currentSlide }) => {
        const categories = banner.length > 0 && banner.map((slide, index) => {
            return (
                <li
                    key={index}
                    className={`${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                >
                    {slide.category}
                </li>
            )
        })


        return <div className="categories">{categories}</div>;
    };

    // Main structure of Slider

    return (

        <>

            {/* Slider */}

            <div className="slider">

                {/* Shop */}

                <div data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="1000" className='shop'>
                    <h1>{language(activeLanguage).categories}</h1>
                    <div className='line'></div>
                    <SliderCategories currentSlide={currentSlide} />
                </div>

                {/* Limited */}

                <div data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="1000" className='limited'>
                    <h3>{banner.length > 0 && banner[currentSlide].number}</h3>
                    <p className='edition'>#Hello-World</p>
                    <p className='programming-shirt'>{language(activeLanguage).title}</p>
                </div>

                {/* Show Now Button */}

                <Link to={banner.length > 0 && `catalogue/${banner[currentSlide].link}`} className='shop-now-button'>
                    <button>{language(activeLanguage).shop}</button>
                </Link>

                {/* Slide Logic */}

                <div data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="1000" className="slide">
                    <img src={banner.length > 0 ? banner[currentSlide].images[0] : ''} alt="Slide" />
                </div>
                <div data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="1000" className="slide-text">{banner.length > 0 && banner[currentSlide].text}</div>

                {/* Padination */}

                <SliderPagination currentSlide={currentSlide} totalSlides={banner.length} />

            </div>

        </>

    );
};

// Export Slider

export default Slider;
