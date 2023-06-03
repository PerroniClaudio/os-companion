"use client";
import React from 'react'
import { FaSearch } from 'react-icons/fa'

type Props = {}

function SearchBar({}: Props) {
  return (
    <section className='bg-slate-800 shadow-inner h-24 w-full flex items-center gap-4 px-16'>

        <div className='bg-white p-2 rounded flex-1 h-12 ' >
            <input type="text" className='h-full w-full border-none focus:ring-transparent' placeholder='Search character...' autoComplete='new-password' />
        </div>
        <button className='bg-os-primary-500 hover:bg-os-primary-700 p-2 rounded h-12 w-12 flex flex-col items-center justify-center'>
            <FaSearch className='text-white' />
        </button>

    </section>
  )
}

export default SearchBar