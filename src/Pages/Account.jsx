import React, { useEffect, useState } from 'react';
import { FcNext } from 'react-icons/fc';
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../Style/account.css';
import { AccountNavbar, SmallFooter } from '../Components';
import { MdProductionQuantityLimits } from "react-icons/md";
import { formatPrice } from '../Functions/functions';

const orders = [
    {
        cardItems: [
            {
                name: "Javascript T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685875052/yellow-small_gom0xq.jpg",
                price: 200000,
                quantity: 2
            },
            {
                name: "React T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685871121/react-small_gvqick.jpg",
                price: 200000,
                quantity: 2
            },
            {
                name: "React T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685871121/react-small_gvqick.jpg",
                price: 200000,
                quantity: 2
            },
        ],
        totalPrice: 400,
        userInfo: {
            userName: "Fazliddin",
            phoneNumber: "990194515",
            avenue: "Toshkent",
            address: "Sergeli-7 Ibrat Mahalla"
        },
        order: true
    },
    {
        cardItems: [
            {
                name: "Javascript T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685875052/yellow-small_gom0xq.jpg",
                price: 200000,
                quantity: 2
            },
            {
                name: "React T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685871121/react-small_gvqick.jpg",
                price: 200000,
                quantity: 2
            },
            {
                name: "React T-Shirt",
                image: "https://res.cloudinary.com/djijmzccq/image/upload/v1685871121/react-small_gvqick.jpg",
                price: 200000,
                quantity: 2
            },
        ],
        totalPrice: 400,
        userInfo: {
            userName: "Fazliddin",
            phoneNumber: "990194515",
            avenue: "Toshkent",
            address: "Sergeli-7 Ibrat Mahalla"
        },
        order: false
    }
]

const Account = () => {

    const [openIndex, setOpenIndex] = useState(null);
    const [allOrders, setAllOrders] = useState([]);

    const handleOpen = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    useEffect(() => {
        const orders = JSON.parse(localStorage.getItem('orderData')) || [];
        setAllOrders(orders);
    }, [])

    return (
        <>
            <AccountNavbar />
            <div className='orders__main__title'>
                <h3>All Your Orders</h3>
            </div>
            <div className="orders-container">
                {allOrders.length > 0 ? (
                    allOrders.map((order, index) => (
                        <div className="order-item" key={index}>
                            <div className='closed__orders'>
                                <AiOutlineShoppingCart color='#3078ff' fontSize={20} />
                                <p>Order - {index + 1}</p>
                                <p className='order__time'>{order.orderTime}</p>
                                <FcNext
                                    onClick={() => handleOpen(index)}
                                    className={`orders__icon ${openIndex === index ? 'rotate' : ''}`}
                                    fontSize={20}
                                />
                            </div>
                            {openIndex === index && (
                                <div className='open__orders'>
                                    <p className='order__item__title'> • Products</p>
                                    <div className="order-summary">
                                        <div className="order-products">
                                            {order.cartItems.map((item, itemIndex) => (
                                                <div className="product-item" key={itemIndex}>
                                                    <img src={item.image} alt={item.name} />
                                                    <p>{item.name}</p>
                                                    <p>{formatPrice(item.price)} UZS</p>
                                                    <p>{item.category}</p>
                                                    <p>Quantity: {item.quantity}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="total-price-container">
                                            <div className="total-price">
                                                <p>Total Price: <span>{formatPrice(order.totalPrice)} UZS</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='order__item__title'> • User Info</p>
                                    <div className="order-details">
                                        <p className='order__details__info'>Name:</p>
                                        <p>{order.userInfo.userName}</p>
                                        <p className='order__details__info'>Phone Number:</p>
                                        <p>{order.userInfo.phoneNumber}</p>
                                        <p className='order__details__info'>Address:</p>
                                        <p>{order.userInfo.avenue}</p>
                                        <p>{order.userInfo.address}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                    ))) : (
                    <div className='no__product__account'>
                        <div>
                            <div className='no__product__account__icon'>
                                <MdProductionQuantityLimits fontSize={40} />
                            </div>
                            <h3>No Product Yet</h3>
                        </div>
                    </div>
                )}

            </div>
            <SmallFooter />
        </>
    );
};

export default Account;
