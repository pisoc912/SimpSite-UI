import React, { useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close';
import { validateUser } from '../api/validateUser';
import registerUser from '../api/registerUser';
import { useRouter } from 'next/router';
import { AccountCircleOutlined } from '@mui/icons-material';
import Cookies from 'js-cookie';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [username, setUsername] = useState('')

    const router = useRouter()
    const { data: session, status } = useSession()
    useEffect(() => {

        if (
            status != "loading" &&
            session &&
            session?.error === "RefreshAccessTokenError"
        ) {
            signOut({ callbackUrl: "/" });
        }
    }, [session, status]);

    async function keycloakSessionLogOut() {
        try {
            await fetch(`/api/auth/logout`, { method: "GET" })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='fixed top-0 w-full bg-white z-50'>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
                <h1 className='w-1/3 text-3xl font-bold text-indigo-600'>SimpSite</h1>
                <ul className='flex w-1/3 ml-32'>
                    <a className='p-6' href='/'>Home</a>
                    <a className='p-6' href='/price'>Price</a>
                    <a className='p-6 mr-8' href='/about'>About</a>
                </ul>
                <div className='flex flex-row w-1/3 justify-end items-center' >
                    {session
                        ?
                        (<div className='flex items-center space-x-8' >
                            <a href="#" className="text-gray-700 hover:bg-gray-100" >
                                <AccountCircleOutlined className='mr-2 item' />Hello, {session.user.email}
                            </a>
                            <a href="/profile" className="text-gray-700 hover:bg-gray-100" >
                                History
                            </a>
                            <a href="#" className="text-gray-400 hover:bg-gray-100" onClick={() => (keycloakSessionLogOut().then(() => signOut({ callbackUrl: '/' })))}>
                                Sign out
                            </a>
                        </div>)
                        : (
                            <div className='flex items-center space-x-8' >
                                <a href='/login'>Login</a>
                                <a href='/register' className='text-indigo-600' >Sign Up Free</a>
                            </div>)
                    }
                </div>

            </div>
        </div>
    )
}

export default Navbar