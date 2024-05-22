import React from 'react'
import { Link } from 'react-router-dom';

export default function TagCodeDetail({ tags}) {
    return (

        <div className='flex justify-start items-center gap-2 flex-wrap my-2'>
            {tags && tags.map((tag, index) => (
                <Link to={`/code?search=${tag} `} className=' hover:scale-95 px-4  py-2  bg-black/10 dark:bg-white/10 rounded-full'  >
                    <span className={`  text-base text`} >{tag}</span>
                </Link>
            ))}
        </div>

    );
}
