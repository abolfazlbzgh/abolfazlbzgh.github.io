import React, { useState } from 'react'
import MobileMenuItem from './MobileMenuItem/MobileMenuItem';
import { useLocation } from 'react-router-dom';
import ThemeIcon from './ThemeIcon/ThemeIcon';
import DesktopMenuItem from './DesktopMenuItem/DesktopMenuItem';
import menu from '../../data/menu';

export default function Header() {
  const location = useLocation();

  const currentLink = location.pathname;
  const [isShowMobileSidebar, setIsShowMobileSidebar] = useState(false)


  const toggleMenu = () => {
    setIsShowMobileSidebar((prev) => {
      return !prev;
    })
  }
  const closeMenu = () => {
    setIsShowMobileSidebar(false)
  }

  return (
    <>
      {/*Mobile Header */}
      <div className='relative'>
        <div className='lg:hidden headerContainer flex justify-start gap-5 '>


          <div onClick={toggleMenu} className='rounded-full cursor-pointer w-11 h-11 transition-all shadow-md btn flex items-center justify-center dark:btnDark '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>

          </div>
          <ThemeIcon />
        </div>

        {/* Menu Mobile */}
        <div
          className={`lg:hidden absolute z-50 space-y-4 p-4 shadow-lg  rounded-lg  left-0 right-0 headerContainer my-4 bg-white mx-auto   
         ${isShowMobileSidebar ? 'opacity-100 visible' : ' opacity-0 hidden'}
         dark:bg-black dark:shadow-slate-500
         `}>

          {
            menu.map(item => {
              return (
                <MobileMenuItem key={item.id} title={item.title} linkTo={item.linkTo} currentLink={currentLink} onClick={closeMenu}>
                  {item.icon}

                </MobileMenuItem>
              );
            })
          }

        </div>

      </div>


      {/* Desktop Header */}
      <div className='hidden lg:flex headerContainer justify-start gap-5 '>
        <ThemeIcon />
        {
          menu.map(item => {
            return (
              <DesktopMenuItem key={item.id} title={item.title} linkTo={item.linkTo} currentLink={currentLink}>
                {item.icon}

              </DesktopMenuItem>
            );
          })
        }


      </div>


    </>

  )
}
