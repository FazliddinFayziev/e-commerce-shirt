import React from 'react'
import { humblePopular } from '../Data/data';

const HumbleProducts = () => {
    return (
        <>
            <div className='popular'>
                <h2>Most Popular</h2>
            </div>
            <div className='popular-cards'>
                {humblePopular.map((product) => {
                    const { id, img, margin_top } = product;
                    return (
                        <div style={{ marginTop: margin_top }} key={id} className='card'>
                            <img src={img} alt="product-image" />
                        </div>
                    )
                })}
            </div>
            <div className='button'>
                <button>View All</button>
            </div>
        </>
    )
}

export default HumbleProducts