import React from 'react';
import DOMPurify from 'dompurify';

const HTMLRenderer = ({ htmlContent }) => {
  const createMarkup = () => {
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

  return <div className='flex w-full justify-start  flex-col' dangerouslySetInnerHTML={createMarkup()} />;
};

export default HTMLRenderer;
