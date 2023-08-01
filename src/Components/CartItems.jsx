import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import "../Style/cart.css";
import { useGlobalContext } from '../Context/context';

const CartItems = () => {
    const { cart, setCart } = useGlobalContext();

    return (
        <div className={`cart-subject ${!cart ? 'close' : ''}`}>

            <AiOutlineClose onClick={() => setCart(false)} className='close-cart' fontSize={30} />

        </div>
    )
}

export default CartItems