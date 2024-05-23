import React from 'react'

export default function InfoItem({ icon, title, desc }) {
    return (
        <div className='flex  items-start flex-wrap  hover:scale-105 bgBox p-4 justify-start' >

            <div className='flex justify-start w-full'>

                <div className='  flex justify-start  text-left w-16 h-16  min-h-16 min-w-16 max-h-16 max-w-16   transition-all' >
                <img src={icon} alt="Icon" className=' w-16 h-16 p-2 min-h-16 min-w-16 max-h-16 max-w-16  object-cover' />
                </div>
            </div>
            <div className='flex w-full flex-col  justify-start h-full'>
                <h3 className='text-2xl  w-full text-title'>{title}</h3>
                <p className=' text text-justify'>{desc}</p>
            </div>

        </div>
    )
}
