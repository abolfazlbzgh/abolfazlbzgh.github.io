import React from 'react'

export default function ContactItem({ children, title, desc }) {
    return (
        <div className='flex flex-col gap-2 p-2 bgBox hover:scale-105 max-h-32'>
            <div className='flex gap-2 items-center justify-start'>
                <span className=' text-lg text-left w-12 min-h-12 text-primary min-w-12 h-12 p-2 transition-all' >
                    {children}</span>
                <h3 className='text-2xl text  w-full '>{title}</h3>
            </div>
            <p className=' text-title p-2'>{desc}</p>
        </div>
    )
}
