import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-1/3 text-3xl font-bold text-indigo-600'>SimpSite</h1>
            <ul className='flex w-1/3 mx-60'>
                <a className='p-6' href='/'>Home</a>
                <a className='p-6' href='/price'>Price</a>
                <a className='p-6 mr-8' href='/about'>About</a>
            </ul>
            <div className='flex flex-row w-1/3 justify-end space-x-4' onClick={handleNav}>
                <a href='/login'>Sign in</a>
                <a href='/register' className='text-indigo-600' >Sign Up Free</a>
                <AccountCircleIcon />
            </div>
            {nav && (
                <div className="absolute right-20 mt-28 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            Your Profile
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            Sign out
                        </a>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Navbar