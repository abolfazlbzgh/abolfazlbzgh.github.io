import React from 'react'
import { Link } from 'react-router-dom';


export default function DesktopMenuItem({ children, title, linkTo, currentLink }) {

    return (
        <div >

            <Link to={linkTo} className={`
            text-lg text-left
            rounded-lg
            flex items-center p-2  gap-2 
            transition-all
            shadow-lg
             hover:gradient
             px-4
             dark:hover:gradient 
             
            ${(currentLink === linkTo || (currentLink.includes('codeDetail') && linkTo === '/code'))
                    ? 'gradient'
                    : 'text bg-white  dark:bg-item-menu-bg '}
             `} > <span className='w-6 h-6'>{children}</span> {title} </Link>
        </div>
    )
}
