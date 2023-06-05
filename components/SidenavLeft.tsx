import React from 'react'
import { BsClock, BsFillVinylFill,BsFillPersonBadgeFill } from "react-icons/bs";

type Props = {}

function SidenavLeft({}: Props) {
  return (
    <section className='flex flex-col min-h-screen bg-background-700 shadow-2xl'>
        <div className='flex items-center justify-center h-16'>
            <h1 className='font-bold text-xl text-primary-500'>Omega Strikers</h1>
        </div>
        <ul>
            <li className='p-4 flex items-center gap-2 text-lg text-secondary-300 cursor-pointer hover:bg-background-500 hover:border-r-4 hover:border-primary-500'>
                <BsFillVinylFill />
                <span>All Characters</span>
            </li>
            <li className='p-4 flex items-center gap-2 text-lg text-secondary-300 cursor-pointer hover:bg-background-500 hover:border-r-4 hover:border-primary-500'>
                <BsClock />
                Latest Builds
            </li>
            <li className='p-4 flex items-center gap-2 text-lg text-secondary-300 cursor-pointer hover:bg-background-500 hover:border-r-4 hover:border-primary-500'>
                <BsFillPersonBadgeFill />
                <span>Profile</span>
            </li>
        </ul>
    </section>
  )
}

export default SidenavLeft