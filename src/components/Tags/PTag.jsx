import React from 'react'
import { parseTextWithMarkdown } from '../../utils/utils'

export default function PTag({ t }) {
    return (
      <p className='text text-xl'>
        {parseTextWithMarkdown(t)}
      </p>
    );
  }
