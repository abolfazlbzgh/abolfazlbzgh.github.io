import React from 'react'

export default function Tag({ tags ,isLarge=false}) {
    return (
        <div className='flex justify-start items-center gap-2 flex-wrap my-2'>
            {tags &&tags.map((tag, index) => (
                <span className={` ${isLarge? 'text-lg px-4  py-2':'text-sm px-2  py-1'}  bg-black/10 dark:bg-white/10 rounded-full text-icon-light text`}>{tag}</span>
            ))}
        </div>
    );
}