import React from 'react';
import { AiOutlineClose } from "react-icons/ai";


const Filter = (
    {
        options,
        sidebar,
        categories,
        setSidebar,
        activeOptions,
        activeCategory,
        setActiveOptions,
        setActiveCategory,
    }) => {

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
                            <h2>Shop</h2>
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
                            <h2>Color</h2>
                            <div className='line-blue'></div>
                            <div className='color-categories'>
                                <div className='p'>All</div>
                                <div className='color-categories-main'>
                                    <div style={{ backgroundColor: "#000" }} className='single-color-active'></div>
                                    <div style={{ backgroundColor: "#fff" }} className='single-color'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OPTIONS FILTER */}

                    <div className='shop-filter'>
                        <div className='shop-filter-title'>
                            <h2>Options</h2>
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