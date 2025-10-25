"use client"
import React, { createContext, useState } from 'react'

export const globalContext = createContext();

export default function ContextApi({ children }) {

    const [studentLogin, setStudentLogin] = useState(false);


    const value = {
        studentLogin, setStudentLogin
    }

    return <globalContext.Provider value={value}>
        {children}
    </globalContext.Provider>
}
