import React, { useContext, useState } from 'react';

const AppContext = React.createContext();


export const AppProvider = ({ children }) => {

    // Change navbar
    const [nav, setNav] = useState(false);

    // Show Cart
    const [show, setShow] = useState(false);

    // Languages
    const languages = ["Eng", "Ru", "Uz"];
    const [activeLanguage, setActiveLanguage] = useState("Eng");

    // cartItem Logic
    const [cart, setCart] = useState(false);

    // Cart Message
    const [cartMessage, setCartMessage] = useState({ type: 'success', msg: '' })

    return <AppContext.Provider value={{

        // Change navbar
        nav, setNav,

        // Show Cart
        show, setShow,

        // Cart Message
        cartMessage, setCartMessage,

        // Languages
        languages,
        activeLanguage,
        setActiveLanguage,

        // Change cart
        cart, setCart,


    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}