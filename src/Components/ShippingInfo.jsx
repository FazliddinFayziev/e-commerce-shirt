import React, { useState } from 'react';
import '../Style/ship.css';
import { useGlobalContext } from '../Context/context';
import { useNavigate } from 'react-router-dom';
import { AiFillBackward } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { removeAllFromCart } from '../Container/cartSlice';
import axios from '../api/axios';
import { formatPrice } from '../Functions/functions';
import { districtNames, language } from '../Functions/language';


const ShippingInfo = () => {

    // redux related
    const { cartItems, totalPrice, totalNumberOfItems } = useSelector((state) => state.cartItems);

    // Global
    const { setCartMessage, setShow } = useGlobalContext();


    // Form Target
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [address, setAddress] = useState('');

    const { ship, languages, changeLanguage, activeLanguage } = useGlobalContext();
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

    // Post function Logic

    const postCart = async (cartData, event) => {
        event.preventDefault();

        setLoading(true);
        try {
            if (cartItems.length > 0 && name && number && district && address) {

                // POSTING DATA TO BACKEND SERVER

                const data = await axios.post('/postcard', cartData);
                setCartMessage({ type: 'success', msg: 'Your Order successfully sent' });
                setShow(true);

                // SENDING DATA TO LOCALSTORAGE

                const existingOrderData = JSON.parse(localStorage.getItem('orderData')) || [];
                existingOrderData.push({
                    cartItems: cartData.cardItems,
                    totalPrice: cartData.totalPrice,
                    orderTime: new Date().toLocaleString(),
                    userInfo: {
                        userName: name,
                        phoneNumber: number,
                        avenue: district,
                        address: address,
                    },
                });
                localStorage.setItem('orderData', JSON.stringify(existingOrderData));

                // SENDING DATA TELEGRAM BOT

                const message = `
                    New Order:
                    🌱Product Info:
                    Total Items: ${totalNumberOfItems},
                    Total Price: ${formatPrice(totalPrice)},
                    Order Time: ${new Date().toLocaleString()}

                    🌱 User Info:
                    Name: ${name},
                    Phone Number: ${number},
                    Address: ${district}, ${address},
                `;

                const botToken = '6251084597:AAG1zPjb46USa7cnT36K8vilom39iKHQ5yc';
                const chatId = '-1001962382834';


                await axios.get(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    params: {
                        chat_id: chatId,
                        text: message,
                    },
                });

                dispatch(removeAllFromCart());
                setName('');
                setNumber('');
                setDistrict('');
                setAddress('');
                setLoading(false);
                navigate('/success')
            } else {
                setLoading(false);
                setCartMessage({ type: 'error', msg: 'Fill all Inputs' });
                setShow(true);
            }
        } catch (error) {
            setLoading(false);
            setCartMessage({ type: 'error', msg: `${error}` });
            setShow(true);
        }
    };




    // Go Back
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className={`ship-subject ${!ship ? 'close' : ''}`}>

            {/* First Navbar */}

            <nav className='single-product-nav-one'>
                <div className='logo-title'>
                    <h3 style={{ textAlign: "center" }}>{language(activeLanguage).shipping}</h3>
                </div>
                <ul className='language'>
                    {languages.map((language, index) => (
                        <p
                            key={index}
                            onClick={() => changeLanguage(language)}
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
                            <label htmlFor="">{language(activeLanguage).name}</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" />
                        </div>
                        <div className='shipping__input'>
                            <label htmlFor="">{language(activeLanguage).number}</label>
                            <input onChange={(e) => setNumber(e.target.value)} type="number" />
                        </div>
                        <div className='shipping__input'>
                            <label htmlFor="">{language(activeLanguage).district}</label>
                            <select onChange={(e) => setDistrict(e.target.value)} name="" id="">
                                <option value="">{language(activeLanguage).choose}</option>
                                {districtNames(activeLanguage).map((single_district, index) => {
                                    return (
                                        <option key={index} value={single_district}>{single_district}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='shipping__input'>
                            <label htmlFor="">{language(activeLanguage).address}</label>
                            <input onChange={(e) => setAddress(e.target.value)} type="text" />
                        </div>
                    </div>
                )}

            </div>

            <div className='center-next-cart-buttons'>
                <div className='next-cart-buttons'>
                    <button onClick={handleBack}><AiFillBackward className='back-icon-small' />{language(activeLanguage).back}</button>
                    <button onClick={(event) => postCart(cartData, event)}>{language(activeLanguage).order}</button>
                </div>
            </div>


        </div>
    )
}

export default ShippingInfo