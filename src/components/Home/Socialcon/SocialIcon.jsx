import React, { useState } from 'react';

export default function SocialIcon({  icon, hoverIcon, link }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);
    return (
        <div onMouseEnter={handleHover}
            onMouseLeave={handleLeave} className='transition-all rounded-md w-10 h-10 bg-white dark:bg-black hover:text-white hover:gradient shadow-lg'>
            <a href={link} target="_blank" className='w-10 h-10 no-underline '>
                <img src={isHovered ? hoverIcon : icon} className=" p-2" alt="linkedin" />
            </a>
        </div>
    )
}
