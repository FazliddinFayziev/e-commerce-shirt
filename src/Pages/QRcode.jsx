import React from 'react';
import { FaTelegram, FaInstagram, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';
import '../Style/qrcode.css';

const QRcode = () => {
    return (
        <div className='qr__code__container'>
            <div>
                <div className='navbar__qrcode'>
                    <span>#Hello-World</span>
                </div>
                <hr />
                <div className='user__main__page'>
                    <div className='user__navbar'>
                        <div className='user__navbar__logo'>
                            F
                        </div>
                    </div>
                    <div className='user__main__page__containers'>
                        <div className='white__background'></div>
                        <div className='blue__background'></div>
                        <div className='center__text__div'>
                            <h2 className='center__text'>Hi, I am Fazliddin 👋</h2>
                            <p className='center__text__below'>I am Sotware developer</p>
                            <div className='follow__me__for__more'>
                                <div className='follow__me__social__icons'>
                                    <div className='follow__me__social__icons__single'>
                                        <FaInstagram />
                                    </div>
                                    <div className='follow__me__social__icons__single'>
                                        <FaTelegram />
                                    </div>
                                    <div className='follow__me__social__icons__single'>
                                        <FaFacebook />
                                    </div>
                                    <div className='follow__me__social__icons__single'>
                                        <FaTwitter />
                                    </div>
                                    <div className='follow__me__social__icons__single'>
                                        <FaGithub />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QRcode;
