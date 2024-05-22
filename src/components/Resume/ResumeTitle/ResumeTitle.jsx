import React from 'react'

export default function ResumeTitle({ children, title }) {
  return (
    <div className='flex gap-1 justify-start items-center'>
      <span className='w-14 h-14 p-2 text-primary'>{children}</span>
      <h2 className='text-title font-bold text-2xl'>{title}</h2>
    </div>
  )
}
