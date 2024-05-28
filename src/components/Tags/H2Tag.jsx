import React from 'react'
import { parseTextWithMarkdown } from '../../utils/utils'
export default function H2Tag({ t }) {
    return (
        <h2 className='text-title font-bold text-2xl'>{parseTextWithMarkdown(t)}</h2>
    )
}

