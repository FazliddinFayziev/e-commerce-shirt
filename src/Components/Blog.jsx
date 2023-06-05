import React from 'react';
import { BsInstagram } from "react-icons/bs"
import { data } from "../Data/data";

const Blog = () => {
    return (
        <>
            <div data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="1000" className='blog'>
                <h2>Our Blog</h2>
            </div>
            <div className='instagram'>
                <div id='blog' data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='instagram-icon'>
                        <BsInstagram fontSize={40} />
                    </div>
                    <h2>#HELLOWORLD_UZ</h2>
                    <p className='follow'>Follow us on instagram</p>
                </div>
            </div>
            <div className='main-instagram-container'>
                <div className='instagram-container'>
                    {data.map((picture) => {
                        const { id, img } = picture;
                        return (
                            <div data-aos="fade-right" data-aos-easing="linear"
                                data-aos-duration="1000" key={id} className='instagram-box'>
                                <div className='insta-img'>
                                    <img src={img} alt="intagram-pictures" />
                                </div>
                                <div className='cover'></div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="1000" className='follow-button'>
                <button>Follow</button>
            </div>
        </>
    )
}

export default Blog