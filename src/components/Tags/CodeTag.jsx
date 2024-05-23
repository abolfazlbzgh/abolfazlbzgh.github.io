import React, { useEffect, useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { docco, dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';

// Register the languages you need
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('html', xml);
SyntaxHighlighter.registerLanguage('css', css);

export default function CodeTag({ code, lang }) {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        // Set initial state
        setIsDarkMode(document.documentElement.classList.contains('dark'));

        return () => observer.disconnect();
    }, []);



    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

    return (
        <div className="relative  rounded-lg shadow-md  dark:bg-gray-800 mx-auto">
            <CopyToClipboard text={code} onCopy={handleCopy}>
                <button className="absolute top-2 right-2 ring-1 text-xs text ring-primary rounded-full px-4 py-1  hover:gradient
            ">
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </CopyToClipboard>
            <div className=" flex max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full  ">
                <SyntaxHighlighter
                    language={lang}
                    style={isDarkMode ? dracula : docco}
                    customStyle={{ backgroundColor: 'transparent', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                    showLineNumbers={true}
                    wrapLines={true}
                    className=""
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>

    );
};
