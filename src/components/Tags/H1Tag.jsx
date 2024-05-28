import React from 'react'
import { parseTextWithMarkdown } from '../../utils/utils'
export default function H1Tag({ t }) {
    return (
        <h1 className='text-title font-bold text-4xl'>{parseTextWithMarkdown(t)}</h1>
    )
}
