import React from 'react'
import { useParams  } from 'react-router-dom';
import HTMLRenderer from '../components/Tags/HTMLRenderer'
import PageBox from '../components/PageBox/PageBox'
import codes from '../data/codes';
import Writer from '../components/Code/Writer/Writer';
import PTag from '../components/Tags/PTag'
import UlTag from '../components/Tags/UlTag'
import H1Tag from '../components/Tags/H1Tag'
import H2Tag from '../components/Tags/H2Tag'
import H3Tag from '../components/Tags/H3Tag'
import H4Tag from '../components/Tags/H4Tag'
import CodeTag from '../components/Tags/CodeTag'
import OlTag from '../components/Tags/OlTag'
import ImgTag from '../components/Tags/ImgTag'
import BrTag from '../components/Tags/BrTag'
import Tag from '../components/Code/Tag/Tag'
import TagCodeDetail from '../components/Code/Tag/TagCodeDetail';

export default function CodeDetail() {
    const { id } = useParams();
    
    const code = codes.find((item) => item.id === id);

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
                    content.push(<ImgTag src={block.src} />)
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
                default:
                    console.log(`Unknown Block Type at index ${index + 1}`);
            }
        });

        return <div className='flex flex-col gap-2 justify-start items-start'>{content}</div>
    }

    const renderLink = () => {
        if (Object.prototype.hasOwnProperty.call(code, "btn")) { // Ensures own properties
            return <a href={code.btnLink} target='_blank' className='ring-1 md:text-xl ring-primary rounded-full px-6 py-2 mt-4 btn btnDark' >{code.btn}</a>
        }
    }
    return (
        <PageBox title={code.title} >

            <div className='w-full flex flex-col justify-start items-start '>
                <Writer {...code} />

                <img src={code.cover} alt="Cover" className=' w-full rounded-md  bg-primary object-cover ' />

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
        </PageBox>
    )
}
