import React from 'react'

export default function UlTag({ items }) {
    return (
      <ul className='list-disc list-outside pl-6'>
        {items.map((item , index) => (
          <li className='text text-xl' key={index}>{item}</li>
        ))}
      </ul>
    );
  }
