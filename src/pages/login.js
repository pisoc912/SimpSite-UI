import React from 'react'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import AuthStatus from './components/AuthStatus'
import { SessionProvider } from 'next-auth/react'
import SessionProviderWrapper from '@/utils/SessionProviderWrapper'

const Login = () => {

    return (
        <SessionProvider>
            <Navbar />
            <LoginPage />
        </SessionProvider>
    )
}

export default Login

