import React from 'react'

export default function InfoItem({ children, title, desc }) {
    return (
        <div className='flex h-24  items-center' >

            <div className='
             text-lg text-left shadow-lg bg-white 
             rounded-lg w-12 min-h-12 min-w-12 h-12 p-2 mr-2 dark:bg-black text-primary transition-all hover:gradient dark:hover:gradient ' >
                {children}</div>
            <div className='flex w-full flex-col '>
                <h3 className='text'>{title}</h3>
                <p className=' w-full  text-title'>{desc}</p>
            </div>

        </div>
    )
}
