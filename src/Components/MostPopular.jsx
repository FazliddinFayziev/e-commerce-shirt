import React from 'react'
import { popular } from '../Data/data'

const MostPopular = () => {
    return (
        <>
            <div className='popular'>
                <h2>Most Popular</h2>
            </div>
            <div className='popular-cards'>
                {popular.map((product) => {
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

export default MostPopular