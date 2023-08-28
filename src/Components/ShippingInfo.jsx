import React, { useEffect, useState } from 'react';
import '../Style/ship.css';
import { useGlobalContext } from '../Context/context';
import { useNavigate } from 'react-router-dom';
import { AiFillBackward } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import axios from '../api/axios';


const ShippingInfo = () => {

    // redux related
    const { cartItems, totalPrice, removeAllFromCart } = useSelector((state) => state.cartItems);

    // Global
    const { setCartMessage, setShow } = useGlobalContext();


    // Form Target
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [address, setAddress] = useState('');

    const { ship, languages, setActiveLanguage, activeLanguage } = useGlobalContext();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartData = {
        cardItems: cartItems,
        totalPrice: totalPrice,
        userInfo: {
            userName: name,
            phoneNumber: number,
            avenue: district,
            address: address,
        },
    };


    const postCart = async (cartData) => {
        setLoading(true);
        try {
            if (cartItems.length > 0 || name !== "" || number !== "" || district !== "" || address !== "") {
                const data = await axios.post('/postcard', cartData);
                setCartMessage({ type: 'success', msg: 'Your Order successfully sent' })
                setShow(true)
                dispatch(removeAllFromCart());
                setName('');
                setNumber('');
                setDistrict('');
                setAddress('');
                setLoading(false);
                console.log(data)
            } else {
                setLoading(false);
                setCartMessage({ type: 'error', msg: 'Fill all Inputs' })
                setShow(true)
            }
        } catch (error) {
            setLoading(false);
            setCartMessage({ type: 'error', msg: `${error}` })
            setShow(true)
        }
    }


    // Go Back
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className={`ship-subject ${!ship ? 'close' : ''}`}>

            {/* First Navbar */}

            <nav className='single-product-nav-one'>
                <div className='logo-title'>
                    <h3>Shipping Info</h3>
                </div>
                <ul className='language'>
                    {languages.map((language, index) => (
                        <p
                            key={index}
                            onClick={() => setActiveLanguage(language)}
                            className={language === activeLanguage ? 'active' : 'no-active'}
                        >
                            {language}
                        </p>
                    ))}
                </ul>
            </nav>

            <div>
                <hr className='straight-line' />
            </div>

            <div className='shipping__container'>

                {loading ? (
                    <div className='shipping__loading__container'>
                        <div className="shipping__loading"></div>
                    </div>
                ) : (
                    <div className='shipping__box'>
                        <div className='shipping__input'>
                            <label htmlFor="">First Name</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" />
                        </div>
                        <div className='shipping__input'>
                            <label htmlFor="">Phone Number</label>
                            <input onChange={(e) => setNumber(e.target.value)} type="number" />
                        </div>
                        <div className='shipping__input'>
                            <label htmlFor="">District</label>
                            <select onChange={(e) => setDistrict(e.target.value)} name="" id="">
                                <option value="">Choose</option>
                                <option value="Uchtepa">Uchtepa</option>
                                <option value="Bektemir">Bektemir</option>
                                <option value="Mirzo-Ulugbek">Mirzo-Ulugbek</option>
                                <option value="Mirabad">Mirabad</option>
                                <option value="Sergeli">Sergeli</option>
                                <option value="Almazar">Almazar</option>
                                <option value="Chilanzar">Chilanzar</option>
                                <option value="Shaikhontohur">Shaikhontohur</option>
                                <option value="Yunusabad">Yunusabad</option>
                                <option value="Yakkasaray">Yakkasaray</option>
                                <option value="Yashnabad">Yashnabad</option>
                                <option value="Yangihayot">Yangihayot</option>
                            </select>
                        </div>
                        <div className='shipping__input'>
                            <label htmlFor="">Address</label>
                            <input onChange={(e) => setAddress(e.target.value)} type="text" />
                        </div>
                    </div>
                )}

            </div>

            <div className='center-next-cart-buttons'>
                <div className='next-cart-buttons'>
                    <button onClick={handleBack}><AiFillBackward className='back-icon-small' /> Back</button>
                    <button onClick={() => postCart(cartData)}>Order</button>
                </div>
            </div>


        </div>
    )
}

export default ShippingInfo