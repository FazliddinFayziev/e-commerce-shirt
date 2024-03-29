import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { language } from '../Functions/language';
import { useGlobalContext } from '../Context/context';


const Filter = (
    {
        colors,
        options,
        sidebar,
        setSidebar,
        categories,
        activeColor,
        activeOptions,
        setActiveColor,
        activeCategory,
        setActiveOptions,
        setActiveCategory,
    }) => {

    const colorFilter = colors.filter((color) => color !== 'All');
    const { activeLanguage } = useGlobalContext();

    return (
        <>
            <div className={`filter ${!sidebar ? 'close' : ''}`}>

                {/* CLOSE BUTTON */}

                <div className='close-filter'>
                    <AiOutlineClose onClick={() => setSidebar(false)} className='close-icon' fontSize={45} />
                </div>

                {/* START OF FILTER */}

                <div className='handle-all'>
                    <div className='main-filter-container'>
                        <div className='filter-title'>
                            <h1>#HELLO WORLD</h1>
                        </div>
                    </div>

                    {/* SHOP FILTER */}

                    <div className='shop-filter'>
                        <div className='shop-filter-title'>
                            <h2>{language(activeLanguage).categories}</h2>
                            <div className='line-blue'></div>
                            <div className='filter-categories'>
                                {categories.map((category, index) => (
                                    <p
                                        key={index}
                                        onClick={() => setActiveCategory(category)}
                                        className={activeCategory === category ? "filter-active-shop" : ""}
                                    >
                                        {category}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COLOR FILTER */}

                    <div className='color-filter'>
                        <div className='color-filter-title'>
                            <h2>{language(activeLanguage).color}</h2>
                            <div className='line-blue'></div>
                            <div className='color-categories'>
                                <div
                                    className={`${activeColor === "All" ? "filter-active-shop" : "p"}`}
                                    onClick={() => setActiveColor("All")}
                                >
                                    All
                                </div>
                                <div className='color-categories-main'>
                                    {
                                        colorFilter.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    style={{ backgroundColor: `${item}` }}
                                                    className={`${activeColor === item ? "single-color-active" : "single-color"}`}
                                                    onClick={() => setActiveColor(item)}
                                                ></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OPTIONS FILTER */}

                    <div className='shop-filter'>
                        <div className='shop-filter-title'>
                            <h2>{language(activeLanguage).options}</h2>
                            <div className='line-blue'></div>
                            <div className='filter-categories'>
                                {options.map((option, index) => (
                                    <p key={index}
                                        className={
                                            activeOptions === option ?
                                                "filter-active-shop" : ""
                                        }
                                        onClick={() => setActiveOptions(option)}>
                                        {option}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='filter-footer'>
                        <p>© #Hello World 2023</p>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Filter