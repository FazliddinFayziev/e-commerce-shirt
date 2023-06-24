import React from 'react';
import { popular } from '../Data/data';
import { Link } from 'react-router-dom';

const LikeProducts = () => {
    return (
        <>

            {/* TITLE */}

            <div className='logo-title'>
                <h3>You may like</h3>
            </div>

            {/* CONTAINER OF CLOTHES */}

            <div className='all-clothes'>
                {popular.map((product, index) => {
                    return (
                        <div key={index}>

                            <Link to={`/catalogue/${product.id}`}>
                                <div className='single-cloth'>
                                    <img src={product.img} alt="single-cloth" />
                                </div>
                            </Link>

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

        </>
    )
}

export default LikeProducts