import React from 'react'
import { elegantPopular } from '../Data/data';

const PopularElegant = () => {
    return (
        <>
            <div className='popular'>
                <h2>Most Popular</h2>
            </div>
            <div className='popular-cards'>
                {elegantPopular.map((product) => {
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

export default PopularElegant