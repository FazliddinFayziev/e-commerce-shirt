import React, { useContext, useState } from 'react';

const AppContext = React.createContext();


export const AppProvider = ({ children }) => {

    // Change navbar
    const [nav, setNav] = useState(false);

    // Languages
    const languages = ["Eng", "Ru", "Uz"];
    const [activeLanguage, setActiveLanguage] = useState("Eng");

    return <AppContext.Provider value={{

        // Change navbar
        nav, setNav,

        // Languages
        languages,
        activeLanguage,
        setActiveLanguage,

    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}