import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Shorten = () => {
    return (
        <div className='w-full text-center bg-zinc-800 text-white'>
            <SearchIcon />
            <input className='w-4/5 h-12 ml-4 rounded-lg my-4' placeholder='   Enter your URL...' />
            <button className='mx-4 bg-indigo-300 w-[200px] rounded-md font-bold my-6 py-3 text-black'>
                Shorten
            </button>
        </div>
    )
}

export default Shorten