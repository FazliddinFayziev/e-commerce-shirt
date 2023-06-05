import React from 'react';
import { BsInstagram } from "react-icons/bs"
import { data } from "../Data/data";
// import { useParallax } from 'react-scroll-parallax';

const Blog = () => {
    return (
        <>
            <div className='blog'>
                <h2>Our Blog</h2>
            </div>
            <div className='instagram'>
                <div>
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
                            <div key={id} className='instagram-box'>
                                <div className='insta-img'>
                                    <img src={img} alt="intagram-pictures" />
                                </div>
                                <div className='cover'></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Blog