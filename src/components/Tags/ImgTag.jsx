import React from 'react'

export default function ImgTag({ src,content }) {
    return (
        <div className='flex flex-col w-full justify-center items-center gap-1'>
            <img src={src} alt="Cover" className=' w-full rounded-md   object-cover ' />
            {content && <p className='text text-base'>{content}</p>}
        </div>
    )
}
