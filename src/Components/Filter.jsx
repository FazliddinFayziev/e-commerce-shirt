import React from 'react';
import { AiOutlineClose } from "react-icons/ai";


const Filter = ({ sidebar, setSidebar }) => {
    return (
        <>
            <div className={`filter ${!sidebar ? 'close' : ''}`}>

                <div className='close-filter'>
                    <AiOutlineClose onClick={() => setSidebar(false)} className='close-icon' fontSize={45} />
                </div>

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
                            <p>All</p>
                            <p>Simple</p>
                            <p>Humble</p>
                            <p>Elegant</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Filter