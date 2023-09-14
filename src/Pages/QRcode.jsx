import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTelegram, FaInstagram, FaLink, FaTwitter, FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import '../Style/qrcode.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchSingleQRCode } from '../Container/qrcodeSlice';
import { Loading } from '../Components';
import SingleUserError from './SingleUserError';

const QRcode = () => {
    // Global

    useEffect(() => {
        AOS.init();
    }, [])

    const { codeId } = useParams();
    const dispatch = useDispatch();
    const { loading, singleQRCode, error } = useSelector((state) => state.qrcode);

    useEffect(() => {
        dispatch(fetchSingleQRCode(codeId))
    }, [codeId])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return (
            <>
                <div className='navbar__qrcode'>
                    <Link to={'/'} style={{ color: "#000", textDecoration: 'none' }}>
                        <span>#Hello-World</span>
                    </Link>
                </div>
                <SingleUserError />
            </>
        )
    }



    return (
        <div className='qr__code__container'>
            <div>
                <div className='navbar__qrcode'>
                    <Link to={'/'} style={{ color: "#000", textDecoration: 'none' }}>
                        <span>#Hello-World</span>
                    </Link>
                </div>
                <hr />
                <div className='user__main__page'>
                    <div className='user__navbar'>
                        <div data-aos="fade-up" data-aos-easing="linear"
                            data-aos-duration="1000" className='user__navbar__logo'>
                            {singleQRCode.logoLetter}
                        </div>
                    </div>
                    <div className='user__main__page__containers'>
                        <div className='white__background'></div>
                        <div className='blue__background'></div>

                        <div className='bg__needed__boubles_one'></div>
                        <div className='bg__needed__boubles_two'></div>
                        <div className='bg__needed__boubles_three'></div>
                        <div className='bg__needed__boubles_four'></div>

                        <div className='center__text__div'>

                            <h2 data-aos="fade-up" data-aos-easing="linear"
                                data-aos-duration="1000" className='center__text'>{singleQRCode.text}</h2>
                            <p data-aos="fade-up" data-aos-easing="linear"
                                data-aos-duration="1000" className='center__text__below'>{singleQRCode.smallText}</p>

                            <div className='follow__me__for__more'>
                                <div className='follow__me__social__icons'>

                                    {
                                        singleQRCode.icons && singleQRCode.icons[0].instagram && (
                                            <Link data-aos="fade-up" data-aos-easing="linear"
                                                data-aos-duration="1000" to={`${singleQRCode.icons[0].instagram}`} className='follow__me__social__icons__single'>
                                                <FaInstagram />
                                            </Link>
                                        )
                                    }

                                    {
                                        singleQRCode.icons && singleQRCode.icons[0].telegram && (
                                            <Link data-aos="fade-up" data-aos-easing="linear"
                                                data-aos-duration="1000" to={`${singleQRCode.icons[0].telegram}`} className='follow__me__social__icons__single' >
                                                <FaTelegram />
                                            </Link>
                                        )
                                    }

                                    {
                                        singleQRCode.icons && singleQRCode.icons[0].facebook && (
                                            <Link data-aos="fade-up" data-aos-easing="linear"
                                                data-aos-duration="1000" to={`${singleQRCode.icons[0].facebook}`} className='follow__me__social__icons__single'>
                                                <FaFacebook />
                                            </Link>
                                        )
                                    }

                                    {
                                        singleQRCode.icons && singleQRCode.icons[0].twitter && (
                                            <Link data-aos="fade-up" data-aos-easing="linear"
                                                data-aos-duration="1000" to={`${singleQRCode.icons[0].twitter}`} className='follow__me__social__icons__single'>
                                                <FaTwitter />
                                            </Link>
                                        )
                                    }

                                    {
                                        singleQRCode.icons && singleQRCode.icons[0].github && (
                                            <Link data-aos="fade-up" data-aos-easing="linear"
                                                data-aos-duration="1000" to={`${singleQRCode.icons[0].github}`} className='follow__me__social__icons__single'>
                                                <FaGithub />
                                            </Link>
                                        )
                                    }

                                    {
                                        singleQRCode.icons && singleQRCode.icons[0].linkedIn && (
                                            <Link data-aos="fade-up" data-aos-easing="linear"
                                                data-aos-duration="1000" to={`${singleQRCode.icons[0].linkedIn}`} className='follow__me__social__icons__single'>
                                                <FaLinkedinIn />
                                            </Link>
                                        )
                                    }

                                    {
                                        singleQRCode.icons && singleQRCode.icons[0].website && (
                                            <Link data-aos="fade-up" data-aos-easing="linear"
                                                data-aos-duration="1000" to={`${singleQRCode.icons[0].website}`} className='follow__me__social__icons__single'>
                                                <FaLink />
                                            </Link>
                                        )
                                    }

                                    {
                                        singleQRCode.icons && singleQRCode.icons[0].youtube && (
                                            <Link data-aos="fade-up" data-aos-easing="linear"
                                                data-aos-duration="1000" to={`${singleQRCode.icons[0].youtube}`} className='follow__me__social__icons__single'>
                                                <FaYoutube />
                                            </Link>
                                        )
                                    }

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
