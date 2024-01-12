'use client'
import React, { createContext } from "react"
const MyContext = createContext()

const ContextAPI = ({ children }) => {
    const username = 'Tile Mountain'
    return (
        <div>
            <MyContext.Provider value={username}>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default ContextAPI