import React, { useState } from 'react'
import PageBox from '../../components/PageBox/PageBox';
import Input from '../../components/CMS/Input';
import CodeTag from '../../components/Tags/CodeTag'
import Article from '../../components/CMS/Article';
import TagItems from '../../components/CMS/TagItems';
import HTMLRenderer from '../../components/Tags/HTMLRenderer'
import Writer from '../../components/Code/Writer/Writer';
import PTag from '../../components/Tags/PTag'
import UlTag from '../../components/Tags/UlTag'
import H1Tag from '../../components/Tags/H1Tag'
import H2Tag from '../../components/Tags/H2Tag'
import H3Tag from '../../components/Tags/H3Tag'
import H4Tag from '../../components/Tags/H4Tag'
import OlTag from '../../components/Tags/OlTag'
import ImgTag from '../../components/Tags/ImgTag'
import BrTag from '../../components/Tags/BrTag'
import ATag from '../../components/Tags/ATag'
import Tag from '../../components/Code/Tag/Tag'
import TagCodeDetail from '../../components/Code/Tag/TagCodeDetail';
import DraggableList from '../../components/CMS/DraggableList';
import { v4 as uuidv4 } from 'uuid';
import codes from '../../data/codesData.json';
import { json } from 'react-router-dom';

export default function CreatePost() {
    const [id, setId] = useState(uuidv4())
    const [title, setTitle] = useState('')
    const [creatorName, setCreatorName] = useState('Abolfazl Bazghandi')
    const [creatorImage, setCreatorImage] = useState('/Images/profile.png')
    const [createTime, setCreateTime] = useState(getFormattedDate())
    const [cover, setCover] = useState('')
    const [tags, setTags] = useState('')
    const [btn, setBtn] = useState('')
    const [btnLink, setBtnLink] = useState('')
    const [article, setArticle] = useState([])
    const [code, setCode] = useState({

        id: '',
        title: '',
        creatorName: "",
        creatorImage: '',
        createTime: "",
        cover: '',
        tags: [],
        btnLink: '',
        btn: '',
        article: [

        ]

    })
    function getFormattedDate() {
        const today = new Date();

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const formattedDate = `${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

        return `${formattedDate}`;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setCode({ ...code, id, title, creatorName, creatorImage, createTime, cover, tags, btnLink, btn, article })
        localStorage.setItem(id, JSON.stringify({ ...code, id, title, creatorName, creatorImage, createTime, cover, tags, btnLink, btn, article }));
    }

    const setTagsFromTagItems = (items) => {
        setTags(items)
    }
    const controlTextArea = (event) => {
        // try {
        //     JSON.parse(event.target.value)
        //     setCode(JSON.parse(event.target.value))
        // } catch (error) {
        //     console.log(error);
        // }
    }
    const onResultArticle = (result) => {
        setArticle([...article, { ...result }]); 
    }
    const render = () => {
        const content = [];
        code.article.forEach((block, index) => {
            switch (block.type) {
                case 'p':
                    content.push(<PTag t={block.content} />)
                    break;
                case 'html':
                    content.push(<HTMLRenderer htmlContent={block.content} />)
                    break;
                case 'h1':
                    content.push(<H1Tag t={block.content} />)
                    break;
                case 'h2':
                    content.push(<H2Tag t={block.content} />)
                    break;
                case 'h3':
                    content.push(<H3Tag t={block.content} />)
                    break;
                case 'h4':
                    content.push(<H4Tag t={block.content} />)
                    break;
                case 'img':
                    content.push(<ImgTag {...block} />)
                    break;
                case 'ul':
                    content.push(<UlTag items={block.items} />)
                    break;
                case 'ol':
                    content.push(<OlTag items={block.items} />)
                    break;
                case 'br':
                    content.push(<BrTag />)
                    break;
                case 'code':
                    content.push(<CodeTag code={block.code} lang={block.lang} />)
                    break;
                case 'a':
                    content.push(<ATag {...block} />)
                    break;
                default:
                    console.log(`Unknown Block Type at index ${index + 1}`);
            }
        });

        return <div className='flex flex-col gap-2 justify-start items-start'>{content}</div>
    }

    const renderLink = () => {
        if (Object.prototype.hasOwnProperty.call(code, "btn") && btn.length > 0) { // Ensures own properties
            return <a href={code.btnLink} target='_blank' className='ring-1 md:text-xl ring-primary rounded-full px-6 py-2 mt-4 btn btnDark' >{code.btn}</a>
        }
    }

    const loadFromId = () => {
        const loadedCode = codes.find((item) => item.id === id);
        if (loadedCode) {
            setCode({ ...code, ...loadedCode })
            load(loadedCode)
        } else {
            const loadedFromLocalStorage = localStorage.getItem(id)
            if (loadedFromLocalStorage) {
                const parsData = JSON.parse(loadedFromLocalStorage)
                load(parsData)
            } else {
                alert('Id Not Found')
            }

        }
    }

    const load = (input) => {
        console.log('start load');
        console.log(input);
        let data = {
            id: '',
            title: '',
            creatorName: "",
            creatorImage: '',
            createTime: "",
            cover: '',
            tags: [],
            btnLink: '',
            btn: '',
            article: [
            ]
        }
        data = { ...data, ...input }
        console.log('start load data');
        console.log(data);
        setTitle(data.title);
        setCreatorName(data.creatorName);
        setCreatorImage(data.creatorImage);
        setCreateTime(data.createTime);
        setCover(data.cover);
        setTags(data.tags);
        setBtn(data.btn);
        setBtnLink(data.btnLink);
        setArticle(data.article);
    }


    return (
        <PageBox title={'Create Post'}>

            <form className='flex flex-col gap-4' onSubmit={(event) => onSubmit(event)}>
                <div className='grid grid-cols-3 gap-3 bgBox p-4 '>

                    <Input title='Id' placeholder="id " state={id} setState={setId} />
                    <Input title='title' placeholder="Title of post " state={title} setState={setTitle} />
                    <Input title='Creator Name' placeholder="Creator Name " state={creatorName} setState={setCreatorName} />
                    <Input title='Creator Image' placeholder="Creator Image Address File " state={creatorImage} setState={setCreatorImage} />
                    <Input title='Create Time' placeholder="Create Time" state={createTime} setState={setCreateTime} />
                    <Input title='Cover' placeholder="Cover Image Address File" state={cover} setState={setCover} />
                    <Input title='Title of button of end page' placeholder="Title button" state={btn} setState={setBtn} />
                    <Input title='Link of button of end page' placeholder="Link button" state={btnLink} setState={setBtnLink} />
                    <button onClick={loadFromId} class="text-white my-auto bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full h-10 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">Load From Id</button>
                </div>
                <div className='flex w-full bgBox p-4'>

                    <TagItems onResult={setTagsFromTagItems} title='Tag' placeholder='Write Tag' />
                </div>


                <div className='flex flex-col justify-center items-center gap-4 mt-4'>
                    <div className='flex w-full flex-col bgBox p-4'>

                        <Article onResult={onResultArticle} />
                        <div className="w-full mt-4">
                            <DraggableList items={article} setItems={setArticle} />
                        </div>
                    </div>
                    <button type="submit" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Json And Show Demo</button>
                    <div className='w-full'>
                        <label htmlFor="codeShow" className="block mb-2 text-sm font-medium text-gray-900 text">Json</label>
                        <textarea id="codeShow" rows="2" value={JSON.stringify(code)} onChange={(event) => controlTextArea(event)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>

                    </div>



                </div>


            </form>




            {/* <CodeTag lang='html' code={JSON.stringify(code)} /> */}



            <div className='flex mt-8 flex-col'>

                <div className='w-full flex flex-col justify-start items-start '>
                    <Writer {...code} />

                    <img src={code.cover} alt="Cover" className=' w-full rounded-md  object-cover ' />

                    {
                        <div className='w-full flex flex-col gap-1 justify-start  overflow-auto'>
                            {render()}
                        </div>
                    }
                    <TagCodeDetail tags={code.tags} isLarge={true} />
                    {
                        renderLink()
                    }
                </div>
            </div>
        </PageBox>

    )
}
