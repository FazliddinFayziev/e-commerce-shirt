import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiShoppingBag } from "react-icons/gi";

const Slider = () => {

    //  Data

    const slidesData = [
        {
            id: 1,
            image: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685798280/small-js_ruslcz.png',
            text: 'Programming',
            number: '1.0',
            category: "Simple",
            path: '/'
        },
        {
            id: 2,
            image: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685856151/react-small-removebg-preview_ueegk6.png',
            text: 'Programming',
            number: '2.0',
            category: "Humble",
            path: '/humble'
        },
        {
            id: 3,
            image: 'https://res.cloudinary.com/djijmzccq/image/upload/v1685856258/small-removebg-preview_zedakx.png',
            text: 'Programming',
            number: '3.0',
            category: "Elegant",
            path: '/elegant'
        },
    ];

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
        const categories = slidesData.map((slide, index) => {
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
                    <h1>Shop</h1>
                    <div className='line'></div>
                    <SliderCategories currentSlide={currentSlide} />
                </div>

                {/* Limited */}

                <div data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="1000" className='limited'>
                    <h3>{slidesData[currentSlide].number}</h3>
                    <p className='edition'>Limited edition</p>
                    <p className='programming-shirt'>Programming Shirt</p>
                </div>

                {/* Show Now Button */}

                <div className='shop-now-button'>
                    <button>Shop Now</button>
                </div>

                {/* Slide Logic */}

                <div data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="1000" className="slide">
                    <img src={slidesData[currentSlide].image} alt="Slide" />
                </div>
                <div data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="1000" className="slide-text">{slidesData[currentSlide].text}</div>

                {/* Padination */}

                <SliderPagination currentSlide={currentSlide} totalSlides={slidesData.length} />

            </div>

            <div className='fixed-card'>
                <GiShoppingBag fontSize={35} />
            </div>

        </>

    );
};

// Export Slider

export default Slider;
