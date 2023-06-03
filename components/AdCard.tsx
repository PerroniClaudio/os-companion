import React from 'react'
import { MdOpenInNew } from 'react-icons/md'

type Props = {}

function AdCard({}: Props) {
  return (
    <section className='border-2 border-gray-600 h-24 rounded w-3/4 text-sm'>
        <div className='bg-gray-600 flex justify-between'>
            <span className='text-gray-50 px-1'>Advertisement</span>
            <div className='flex items-center gap-1 text-os-secondary-500 cursor-pointer'>
                <span>Remove ads</span>
                <MdOpenInNew />
            </div>
        </div>
        <hr className='border-t border-gray-600' />

    </section>
  )
}

export default AdCard