import React, { useEffect } from 'react'
import { language } from '../Functions/language';
import { useGlobalContext } from '../Context/context';

const Footer = () => {

    const { activeLanguage } = useGlobalContext();

    // MAIN FUNCTION OF FOOTER

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });
            });
        });
    }, [])

    // MAIN

    return (
        <>
            <footer>

                {/* footer line */}

                <div className='footer-line-box'>
                    <div className='footer-line'></div>
                </div>

                {/* subscribe text */}

                <div data-aos="fade-up-right" data-aos-easing="linear"
                    data-aos-duration="1000" className='subscribe'>
                    <h3>{language(activeLanguage).ask}</h3>
                </div>

                <div data-aos="fade-up-right" data-aos-easing="linear"
                    data-aos-duration="1000" className='contact__details__container'>
                    <p>{language(activeLanguage).question}</p>
                </div>

                {/* subscribe input */}

                <div data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="1000" className='subscribe-container'>
                    <div className='subscribe-input'>
                        <input type="text" placeholder={language(activeLanguage).askPlaceholder} />
                        <button>{language(activeLanguage).send}</button>
                    </div>
                </div>

                {/* footer // Categories // Content // Social */}

                <div className='footer-container'>

                    {/* Box 1 */}

                    <div data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="1000" className='footer-box'>
                        <p className='main-text'>{language(activeLanguage).categories}</p>
                        <div className='last-line'></div>
                        <div className='ul-box'>
                            <div>
                                <p>Simple</p>
                                <p>Humble</p>
                                <p>Elegant</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 2 */}

                    <div data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="1000" className='footer-box'>
                        <p className='main-text'>{language(activeLanguage).content}</p>
                        <div className='last-line'></div>
                        <div className='ul-box'>
                            <div>
                                <a href="#home">
                                    <p>Home</p>
                                </a>
                                <a href="#popular">
                                    <p>{language(activeLanguage).simple_popular}</p>
                                </a>
                                <a href='#blog'>
                                    <p>{language(activeLanguage).simple_blog}</p>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Box 3 */}

                    <div data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="1000" className='footer-box'>
                        <p className='main-text'>{language(activeLanguage).social}</p>
                        <div className='last-line'></div>
                        <div className='ul-box'>
                            <div>
                                <p>Instagram</p>
                                <p>Telegram</p>
                                <p>Facebook</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* © CopyRight */}

                <div className='copy-right'>
                    <p>{language(activeLanguage).copyright}</p>
                </div>

            </footer>

        </>
    )
}

export default Footer