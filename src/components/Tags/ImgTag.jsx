import React from 'react'

export default function ImgTag({ src }) {
    return (
        <img src={src} alt="Cover" className=' w-full rounded-md   object-cover ' />
    )
}
