import React from 'react'
import { parseTextWithMarkdown } from '../../utils/utils'
export default function H4Tag({ t }) {
    return (
        <h4 className='text-title font-bold text-base'>{parseTextWithMarkdown(t)}</h4>
    )
}

