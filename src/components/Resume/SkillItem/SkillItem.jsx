import React from 'react'

export default function SkillItem({ title, percent }) {
    const per = 50;
    const width = `w-[${per}%]`
    return (
        <div className='flex flex-col w-full gap-4'>
            <div className='flex justify-between items-center'>
                <p className='text'>{title}</p>
                <p className='text'>{percent}%</p>
            </div>
            {/* <div className='relative w-full h-2 bg-primary/40 rounded-full'>
            <div className='absolute right-0 h-2 left-50 bg-red-600 rounded-full'></div>
            </div> */}

            <div className="relative h-2">
                <div className="absolute rounded-full inset-0 bg-black/10 dark:bg-white/10 w-full h-1/2"></div>
                <div className="absolute rounded-full top-0 left-0 gradient h-1/2" style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    )
}
