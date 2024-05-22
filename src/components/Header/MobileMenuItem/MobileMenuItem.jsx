import React from 'react'
import { Link } from 'react-router-dom';

export default function MobileMenuItem({ children, title, linkTo, currentLink, onClick }) {

    const click = () => {
        onClick();
    }
    return (
        <div className='w-40'>

            <Link to={linkTo} onClick={click} className={`
            text-lg text-left 
            flex items-center gap-4 
            transition-all 
             hover:text-primary
             dark:hover:text-primary 
             ${(currentLink === linkTo || (currentLink.includes('codeDetail') && linkTo === '/code')) 
                ? 'text-primary dark:text-primary' : 'text'}
             `} >  <span className='w-6 h-6'>{children}</span> {title} </Link>
        </div>
    )
}
