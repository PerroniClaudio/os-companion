import React from 'react'
import AdCard from './AdCard'

type Props = {}

function SidenavRight({}: Props) {
  return (
    <section className='flex flex-col min-h-screen bg-background-700 shadow'>
        <div className="h-16 p-4 ">
            <button className='p-2 text-lg font-extrabold text-white bg-accent-500 rounded w-full shadow'>
                LOGIN
            </button>
        </div>

        <div className='flex flex-col gap-4 px-2 my-2'>
            <AdCard />
        </div>

    </section>
  )
}

export default SidenavRight