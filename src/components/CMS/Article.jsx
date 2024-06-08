import React, { useState } from 'react'
import Select from 'react-select';
import Input from './Input';
import Textarea from './Textarea';
import TagItems from './TagItems';
import { v4 as uuidv4 } from 'uuid';


export default function Article({ onResult }) {
    const options = [
        { value: 'br', label: 'br' },
        { value: 'p', label: 'p' },
        { value: 'img', label: 'img' },
        { value: 'h1', label: 'h1' },
        { value: 'h2', label: 'h2' },
        { value: 'h3', label: 'h3' },
        { value: 'h4', label: 'h4' },
        { value: 'a', label: 'a' },
        { value: 'ul', label: 'ul' },
        { value: 'ol', label: 'ol' },
        { value: 'code', label: 'code' },
        { value: 'html', label: 'html' },
        { value: 'video', label: 'video' },
    ];
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('start onSubmit');
        let article = { type: selectedOption.label }
        article.id = uuidv4();
        if (content) {
            article.content = content
        }
        if (src) {
            article.src = src
        }
        if (lang) {
            article.lang = lang
        }
        if (items.length) {
            article.items = items
        }
        if (link) {
            article.link = link
        }
        if (code) {
            article.code = code
        }
        console.log('onsubmeit add new tag');
        onResult(article)

    }

    const [selectedOption, setSelectedOption] = useState(null);
    const [isShowContent, setIsShowContent] = useState(false);
    const [isShowItems, setIsShowItems] = useState(false);
    const [isShowSrc, setIsShowSrc] = useState(false);
    const [isShowLang, setIsShowLang] = useState(false);
    const [isShowCode, setIsShowCode] = useState(false);
    const [isShowLink, setIsShowLink] = useState(false);

    const [content, setContent] = useState('')
    const [src, setSrc] = useState('')
    const [lang, setLang] = useState('')
    const [link, setLink] = useState('')
    const [items, setItems] = useState([])
    const [code, setCode] = useState('')

    const handleChange = (selected) => {
        setContent('')
        setSrc('')
        setLang('')
        setLink('')
        setCode('')
        setItems([])
        setIsShowContent(false)
        setIsShowItems(false)
        setIsShowLang(false)
        setIsShowSrc(false)
        setIsShowLink(false)
        setIsShowCode(false)
        setSelectedOption(selected);
        console.log(selected);
        if (selected.label === 'ul' || selected.label === 'ol') {
            setIsShowItems(true)
        } else if (selected.label === 'code') {
            setIsShowCode(true)
            setIsShowLang(true)
        } else if (selected.label === 'a') {
            setIsShowLink(true)
            setIsShowContent(true)
        } else if (selected.label === 'br') {

        } else if (selected.label === 'img') {
            setIsShowSrc(true)
            setIsShowContent(true)
        } else if (selected.label === 'video') {
            setIsShowSrc(true)
        } else { // p h html
            setIsShowContent(true)
        }
    };
    const onResultItems = (allItems) => {
        console.log(allItems);
        setItems(allItems)
    }
    return (
        <div className='w-full'>
            <form className='flex flex-col gap-4' onSubmit={(event) => onSubmit(event)}>
                <div className='grid grid-cols-2 gap-4'>

                    <Select
                        value={selectedOption}
                        onChange={handleChange}
                        options={options}
                        className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <div className='flex justify-end items-center'>

                        <button type="submit" onClick={(event) => onSubmit(event)} class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-56 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Html Tag</button>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>

                    {isShowContent && <Textarea title='content' placeholder={`Enter content of ${selectedOption.label}`} state={content} setState={setContent} />}
                    <div className='grid grid-cols-2 gap-4'>
                        {isShowSrc && <Input title='src' placeholder={`Enter src of ${selectedOption.label}`} state={src} setState={setSrc} />}
                        {isShowLang && <Input title='lang' placeholder={`Enter lang of ${selectedOption.label}`} state={lang} setState={setLang} />}
                        {isShowLink && <Input title='link' placeholder={`Enter link of ${selectedOption.label}`} state={link} setState={setLink} />}
                    </div>
                    {isShowItems && <TagItems onResult={onResultItems} title='items' placeholder={`Enter item of ${selectedOption.label}`} />}
                    {isShowCode && <div className='w-full'>
                        <label htmlFor="codeShow" className="block mb-2 text-sm font-medium text-gray-900 text">Code</label>
                        <textarea id="codeShow" rows="6" value={code} onChange={(event) => setCode(event.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>

                    </div>}
                </div>

            </form>

        </div>
    )
}
