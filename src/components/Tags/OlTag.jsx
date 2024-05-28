import React from 'react'
import { parseTextWithMarkdown } from '../../utils/utils'
export default function OlTag({ items }) {
    return (
      <ul className='list-decimal list-inside'>
        {items.map((item , index) => (
          <li className='text  text-xl' key={index}>{parseTextWithMarkdown(item)}</li>
        ))}
      </ul>
    );
  }