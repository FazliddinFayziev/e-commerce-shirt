import React from 'react'
import { language } from '../Functions/language'
import { useGlobalContext } from '../Context/context'
import { useNavigate } from 'react-router-dom';
import Input from './Input';

const SmallFooter = () => {
    const { activeLanguage } = useGlobalContext();
    const navigate = useNavigate();
    const handleCatalogue = () => {
        navigate('/catalogue')
    }
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

                <Input />

                {/* footer // Categories // Content // Social */}

                <div className='footer-container'>

                    {/* Box 1 */}

                    <div className='footer-box'>
                        <p className='main-text'>{language(activeLanguage).categories}</p>
                        <div className='last-line'></div>
                        <div className='ul-box'>
                            <div>
                                <p onClick={handleCatalogue}>Simple</p>
                                <p onClick={handleCatalogue}>Humble</p>
                                <p onClick={handleCatalogue}>Elegant</p>
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