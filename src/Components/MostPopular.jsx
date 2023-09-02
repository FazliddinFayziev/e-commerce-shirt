import React from 'react'
import { popular } from '../Data/data'
import { Link } from 'react-router-dom';
import { language } from '../Functions/language';
import { useGlobalContext } from '../Context/context';

const MostPopular = () => {
    const { activeLanguage } = useGlobalContext();
    return (
        <>
            <div id='popular' data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="1000" className='popular'>
                <h2>{language(activeLanguage).popular}</h2>
            </div>
            <div className='popular-cards'>
                {popular.map((product) => {
                    const { id, img, margin_top } = product;
                    return (
                        <div data-aos="fade-right" data-aos-easing="linear"
                            data-aos-duration="1000"
                            style={{ marginTop: margin_top }} key={id} className='card'>
                            <img src={img} alt="product-image" />
                        </div>
                    )
                })}
            </div>
            <div data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="1000" className='button'>
                <Link to="/catalogue">
                    <button>{language(activeLanguage).view}</button>
                </Link>
            </div>
        </>
    )
}

export default MostPopular