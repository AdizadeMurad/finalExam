import React, { createContext } from 'react'


export const MainContext = createContext()

function MainProvider({ children }) {
    return (
        <MainContext.Provider value={{}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider