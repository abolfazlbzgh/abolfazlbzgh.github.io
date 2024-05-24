import React from 'react'

export default function UlTag({ items }) {

  const boldIfHaveTitle = (item) => {
    // console.log('index = ' + temp.indexOf(':'));
    // console.log('start = ' + temp.slice(0, temp.indexOf(':')));
    // console.log('end = ' + temp.slice(temp.indexOf(':') + 1));
    return
  }
  boldIfHaveTitle('sdf')
  return (
    <ul className='list-disc list-outside pl-6'>
      {items.map((item, index) => (
        <li className='text text-xl' key={index}><b>{item.slice(0, item.indexOf(':')+1)}</b>{item.slice(item.indexOf(':') + 1)}</li>
      ))}
    </ul>
  );
}
