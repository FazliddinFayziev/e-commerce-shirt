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

            </div>
        </>
    )
}

export default Filter