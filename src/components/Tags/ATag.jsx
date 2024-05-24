import React from 'react'

export default function ATag({ content, link }) {
    return (
        <div>
            <a href={link} target='_blank' className='text-lg text hover:text-xl transition-all underline'>{content}</a>
        </div>
    )
}
