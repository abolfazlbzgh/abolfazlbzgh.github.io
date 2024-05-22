import React from 'react'

export default function ExperienceItem({ title, desc, year, location, company, companyLink }) {
    return (
        <div className='flex flex-col gap-2 items-start w-full min-w-64 bgBox hover:scale-105  p-4  justify-start' >

            <p className='text'>{year}</p>
            <h3 className='text-2xl  text-title w-full '>{title}</h3>
            <p className='text'>{desc}</p>

            <div className='flex justify-between w-full'>
                <p className=' text'>
                    <a href={companyLink} target='_blank'>{company}</a></p>
                <p className='text'>{location}</p>
            </div>


        </div>
    )
}

