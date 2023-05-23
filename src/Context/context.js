import React, { useContext, useState } from 'react';

const AppContext = React.createContext();


export const AppProvider = ({ children }) => {

    // Change navbar
    const [nav, setNav] = useState(false);

    return <AppContext.Provider value={{

        // Change navbar
        nav, setNav

    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}