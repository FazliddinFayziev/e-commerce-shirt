import React from 'react';
import { AiOutlineClose } from "react-icons/ai";


const Filter = ({ sidebar, setSidebar, activeCategory, setActiveCategory, categories }) => {
    return (
        <>
            <div className={`filter ${!sidebar ? 'close' : ''}`}>

                <div className='close-filter'>
                    <AiOutlineClose onClick={() => setSidebar(false)} className='close-icon' fontSize={45} />
                </div>

                <div className='handle-all'>
                    <div className='main-filter-container'>
                        <div className='filter-title'>
                            <h1>#HELLO WORLD</h1>
                        </div>
                    </div>

                    <div className='shop-filter'>
                        <div className='shop-filter-title'>
                            <h2>Shop</h2>
                            <div className='line-blue'></div>
                            <div className='filter-categories'>
                                {categories.map((category) => (
                                    <p
                                        className={
                                            activeCategory === category ?
                                                "filter-active-shop" : ""
                                        }
                                        onClick={() => setActiveCategory(category)}>
                                        {category}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='color-filter'>
                        <div className='color-filter-title'>
                            <h2>Color</h2>
                            <div className='line-blue'></div>
                            <div className='color-categories'>
                                <div className='p'>All</div>
                                <div className='color-categories-main'>
                                    <div style={{ backgroundColor: "red" }} className='single-color'></div>
                                    <div style={{ backgroundColor: "#000" }} className='single-color'></div>
                                    <div style={{ backgroundColor: "#fff" }} className='single-color'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />

                </div>


            </div>
        </>
    )
}

export default Filter