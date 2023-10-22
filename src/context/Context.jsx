import React, { createContext, useState } from 'react'

export const cartContext = createContext();

function Context({ children }) {

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(undefined);

    return (
        <cartContext.Provider value={{ cart, setCart, user, setUser }}>
            {children}
        </cartContext.Provider>
    )
}

export default Context