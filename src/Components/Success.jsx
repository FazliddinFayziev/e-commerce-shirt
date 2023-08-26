import React, { useEffect } from 'react'
import SuccessNavbar from './SuccessNavbar'
import SmallFooter from './SmallFooter'
import '../Style/success.css'
import { BsBoxSeamFill, BsEmojiSmile } from 'react-icons/bs'
import { runFireworks } from '../Functions/success'
import { Link } from 'react-router-dom'

const Success = () => {
    useEffect(() => {
        runFireworks();
    }, [])
    return (
        <>
            <SuccessNavbar />
            <div className='success__container'>
                <div className='success__box'>
                    <div className='success__box__icon'>
                        <BsBoxSeamFill fontSize={40} />
                    </div>
                    <div className='thanks__order order__green'>
                        <h4>Thank you for your order !</h4>
                    </div>
                    <div className='thanks__order'>
                        <h4>
                            Our team will contact you soon
                            <BsEmojiSmile className='thanks__order__smile' color='orange' fontSize={20} />
                        </h4>
                    </div>
                    <div className='success__button'>
                        <Link to={'/'}>
                            <button>Home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <SmallFooter />
        </>
    )
}

export default Success