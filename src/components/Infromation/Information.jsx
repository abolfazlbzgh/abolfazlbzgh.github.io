import React from 'react'
import InformationIcon from '../Icons/InformationIcon'

export default function Information({ text }) {
    return (
        <div className='flex justify-center items-center'>
            <span className='w-14 h-14 p-3 text-text-dark dark:text-white'>
                <InformationIcon />
            </span>
            <h2 className='text-text-dark dark:text-white text-2xl'>{text}</h2>
        </div>
    )
}
