import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();


export const AppProvider = ({ children }) => {

    // Change navbar
    const [nav, setNav] = useState(false);

    // Show Cart
    const [show, setShow] = useState(false);

    // Shipping Cart
    const [ship, setShip] = useState(false);

    // Languages
    const languages = ["Eng", "Ru", "Uz"];
    const storedLanguage = JSON.parse(localStorage.getItem('language'));
    const [activeLanguage, setActiveLanguage] = useState(storedLanguage);

    useEffect(() => {
        if (!storedLanguage) {
            localStorage.setItem('language', JSON.stringify('Uz'));
        }
        else {
            localStorage.setItem('language', JSON.stringify(storedLanguage));
        }
    }, []);

    const changeLanguage = (language) => {
        setActiveLanguage(language)
        localStorage.setItem('language', JSON.stringify(language));
    };

    // cartItem Logic
    const [cart, setCart] = useState(false);

    // Cart Message
    const [cartMessage, setCartMessage] = useState({ type: 'success', msg: '' })

    return <AppContext.Provider value={{

        // Change navbar
        nav, setNav,

        // Show Cart
        show, setShow,

        // Shipping Cart
        ship, setShip,

        // Cart Message
        cartMessage, setCartMessage,

        // Languages
        languages,
        activeLanguage,
        setActiveLanguage,
        changeLanguage,

        // Change cart
        cart, setCart,


    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}