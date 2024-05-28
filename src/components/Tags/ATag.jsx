import React from 'react'
import { parseTextWithMarkdown } from '../../utils/utils'
export default function ATag({ content, link }) {
    return (
        <div>
            <a href={link} target='_blank' className='text-lg text hover:text-xl transition-all underline cursor-pointer'>{parseTextWithMarkdown(content)}</a>
        </div>
    )
}
