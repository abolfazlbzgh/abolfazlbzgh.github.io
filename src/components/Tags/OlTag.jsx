import React from 'react'

export default function OlTag({ items }) {
    return (
      <ul className='list-decimal list-inside'>
        {items.map((item , index) => (
          <li className='text  text-xl' key={index}>{item}</li>
        ))}
      </ul>
    );
  }