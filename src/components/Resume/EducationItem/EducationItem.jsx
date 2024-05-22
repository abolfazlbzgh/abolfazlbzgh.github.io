import React from 'react'

export default function EducationItem({ title, degree, year, location, university, universityLink, rank, rankingLink }) {
    return (
        <div className='flex flex-col gap-2 items-start w-full min-w-64 bgBox hover:scale-105  p-4  justify-start' >

            <p className='text'>{year}</p>
            <h3 className='text-2xl   w-full text-title'>{title},{degree}</h3>
            <p className=' text'>
                <a href={universityLink} target='_blank'>{university}</a></p>

            <div className='flex justify-between w-full'>
                <p className=' text'>
                    <a href={rankingLink} target='_blank'>{rank}</a></p>
                <p className='text'>{location}</p>
            </div>


        </div>
    )
}
