import React from 'react'

export default function PageBox({ children, title }) {
    return (
        <>
            <div className='pageContainer pageBackground  '>
                <div className='flex justify-start items-center mb-4'>
                    <h1 className='text-title text-3xl font-bold'>
                        {title}
                    </h1>
                    <span className='ml-4 inline-block h-1 w-3/12 gradient rounded-full'></span>
                </div>

                {children}
            </div>

            <div className='h-16 w-full'></div>
        </>
    )
}
