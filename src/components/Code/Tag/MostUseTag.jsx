import React from 'react'

export default function MostUseTag({ tags, onClick }) {


    return (
        <div className='flex justify-start items-start w-full flex-col gap-2 mb-4'>
            <h2 className='font-bold text-title'>Most Used Tags</h2>
            <div className='flex w-full justify-start flex-wrap items-center gap-2 '>
                {tags && tags.map((tag, index) => (
                    <span key={index} onClick={() => { onClick(tag) }} className={`cursor-pointer hover:scale-95 text-xs px-3  py-1 bg-black/10 dark:bg-white/10 rounded-full text-icon-light text`}>{tag}</span>
                ))}
            </div>
        </div>

    )
}
