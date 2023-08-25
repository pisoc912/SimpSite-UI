import React from 'react'
import Navbar from './components/Navbar'
import RegisterPage from './components/RegisterPage'
import { SessionProvider } from 'next-auth/react'

const register = () => {
    return (
        <SessionProvider>
            <Navbar />
            <RegisterPage />
        </SessionProvider>
    )
}

export default register