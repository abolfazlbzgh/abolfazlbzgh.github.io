import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const topRef = useRef(null);
    useEffect(() => {
        if (topRef.current) {
            if (pathname !== '/code'){
                topRef.current.scrollIntoView({ behavior: 'smooth' });
                
            }
        }
    }, [pathname]);

    return <div ref={topRef} className='w-full h-50 bg-red-600' />;
};

export default ScrollToTop;
