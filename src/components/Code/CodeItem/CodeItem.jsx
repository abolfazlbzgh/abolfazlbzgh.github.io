import React from 'react'
import { Link } from 'react-router-dom'
import Tag from '../Tag/Tag'

export default function CodeItem({ id, cover, createTime, title, tags }) {
    return (
        <div className=' p-4 flex flex-col justify-start items-start gap-4 bgBox hover:scale-105'>
            <Link to={`/codeDetail/${id}`} className='w-full'>
                <div className='flex justify-center items-center w-full '>

                    <img src={cover} alt="Cover" className='w-full max-h-56 rounded-md mb-4  object-cover  ' />
                </div>
                <h1 className='text-title text-2xl font-bold'>{title}</h1>
                <Tag tags={tags} />
                <p className='text text-base'>{createTime}</p>
            </Link>
        </div>
    )
}
