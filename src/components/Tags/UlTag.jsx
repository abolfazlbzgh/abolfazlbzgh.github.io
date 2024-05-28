import React from 'react'
import { parseTextWithMarkdown } from '../../utils/utils'

export default function UlTag({ items }) {

  return (
    <ul className='list-disc list-outside pl-6'>
      {items.map((item, index) => (
        <li className='text text-xl' key={index}>{parseTextWithMarkdown(item)}</li>
      ))}
    </ul>
  );
}
