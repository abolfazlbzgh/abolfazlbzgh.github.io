import React from 'react'
import { parseTextWithMarkdown } from '../../utils/utils'
export default function H3Tag({ t }) {
    return (
        <h3 className='text-title font-bold text-xl'>{parseTextWithMarkdown(t)}</h3>
    )
}


