import React from 'react'
import { humblePopular } from '../Data/data';
import { Link } from 'react-router-dom';

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
                        <div data-aos="fade-right" data-aos-easing="linear"
                            data-aos-duration="1000" style={{ marginTop: margin_top }} key={id} className='card'>
                            <img src={img} alt="product-image" />
                        </div>
                    )
                })}
            </div>
            <div data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="1000" className='button'>
                <Link to="/catalogue">
                    <button>View All</button>
                </Link>
            </div>
        </>
    )
}

export default HumbleProducts