import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose, AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";

import "../Style/catalogue.css";
import { popular } from '../Data/data';

const Catalogue = () => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <div className='both-catalogue'>

            <div className={`filter ${!sidebar ? 'close' : ''}`}>

                <div className='close-filter'>

                    <AiOutlineClose onClick={() => setSidebar(false)} className='close-icon' fontSize={25} />

                </div>

                <div className='main-filter-container'></div>

            </div>



            <div className='catalogue'>

                <div className='above-nav-container'>

                    {/* FIRST CATALOGUE */}

                    <nav className='above-nav'>

                        {/* MENU  */}

                        <div onClick={() => setSidebar(true)} className='nav-filter'>
                            <TiThMenu fontSize={20} />
                        </div>

                        <div className='big-screen-nothing'></div>

                        <ul className='language'>
                            <p className='active'>Eng</p>
                            <p className='no-active'>Ru</p>
                            <p className='no-active'>Uz</p>
                        </ul>
                    </nav>

                    {/* SECOND CATALOGUE */}

                    <div className='home-catalogue-nav'>

                        <div className='catalogue-one'>
                            <p className='no-active'>Home</p>
                            <div className='catalogue-dot'>
                                <p className='active'>Catalogue</p>
                                <div className='dot'></div>
                            </div>
                        </div>

                        <div className='catalogue-two'>
                            <div className='catalogue-search'>
                                <AiOutlineSearch fontSize={30} />
                            </div>
                            <div className='catalogue-box'>
                                <AiOutlineShopping fontSize={30} />
                            </div>
                            <div className='catalogue-box-count-product'><p>3</p></div>
                        </div>

                    </div>

                    {/* All clothes */}

                    <div className='all-clothes'>
                        {popular.map((product) => {
                            return (
                                <div>
                                    <div className='single-cloth'>
                                        <img src={product.img} alt="single-cloth" />
                                    </div>

                                    <div className='shirt-container'>
                                        <div className='shirt-info'>
                                            <p className='category'>category</p>
                                            <p className='title'>our title</p>
                                            <p className='price'>20 $</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Catalogue;
