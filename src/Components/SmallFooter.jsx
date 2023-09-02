import React from 'react'
import { language } from '../Functions/language'
import { useGlobalContext } from '../Context/context'

const SmallFooter = () => {
    const { activeLanguage } = useGlobalContext();
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

                    <div className='footer-box'>
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

                    {/* Box 3 */}

                    <div className='footer-box'>
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

export default SmallFooter