import React from 'react'
import { MdOpenInNew } from 'react-icons/md'

type Props = {}

function AdCard({}: Props) {
  return (
    <section className='border-2 border-secondary-800 h-24 rounded w-3/4 text-sm'>
        <div className='bg-secondary-800 flex justify-between'>
            <span className='text-secondary-200 px-1'>Advertisement</span>
            <div className='flex items-center gap-1 text-accent-500 cursor-pointer'>
                <span>Remove ads</span>
                <MdOpenInNew />
            </div>
        </div>
        <hr className='border-t border-secondary-700' />

    </section>
  )
}

export default AdCard