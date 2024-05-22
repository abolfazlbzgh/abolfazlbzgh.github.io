import React from 'react'

export default function AwardItem({ title, desc, year, location }) {
    return (
        <div className='flex flex-col gap-2 items-start w-full min-w-64 bgBox hover:scale-105  p-4  justify-start' >

            <p className='text'>{year}</p>
            <h3 className='text-2xl  text-title w-full '>{title}</h3>
            <p className='text'>{desc}</p>
            {/* <p className='  text-icon-light dark:text-text-dark'>
                <a href={companyLink} target='_blank'>{company}</a></p> */}

            <div className='flex justify-end w-full'>
                <p className='text'>{location}</p>
            </div>


        </div>
    )
}
