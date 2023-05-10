import React from 'react'

import Typed from 'react-typed';

const HomePage = () => {
    return (
        <div>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-indigo-600 font-bold p-2'>
                    We’ve expanded!
                </p>
                <h2 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Shorten URLs
                </h2>
                <h2 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Generate QR Codes.
                </h2>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        And now, create
                    </p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['HTTP://', 'WWW.', '.COM']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-indigo-300'>Get Started For Free</button>
            </div>
        </div>
    )
}

export default HomePage