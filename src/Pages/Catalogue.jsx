import React from 'react';
import { TiThMenu } from "react-icons/ti";


// Styles
import "../Style/catalogue.css";

const Catalogue = () => {
    return (
        <>
            <div className='both-catalogue'>
                {/* <div className='filter'></div> */}
                <div className='catalogue'>
                    <div className='above-nav-container'>
                        <nav className='above-nav'>
                            <div onClick={() => { '' }} className='nav'>
                                <TiThMenu fontSize={20} />
                            </div>

                            <ul>
                                <p></p>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalogue