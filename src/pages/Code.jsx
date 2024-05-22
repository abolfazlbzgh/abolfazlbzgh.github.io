import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBox from '../components/PageBox/PageBox';
import PaginationButton from '../components/Code/PaginationButton/PaginationButton';
import codes from '../data/codes';
import Search from '../components/Search/Search';
import CodeItem from '../components/Code/CodeItem/CodeItem';
import Information from '../components/Infromation/Information';
import MostUseTag from '../components/Code/Tag/MostUseTag';
import { extractTagsAndSort } from '../utils/utils'
import ScrollToTopButton from '../components/Code/ScrollToTopButton/ScrollToTopButton';


export default function Code() {
  const dataTest = codes.flatMap((item) => Array(10).fill(item));
  // const [currentPage, setCurrentPage] = useState(1);
  // const [codesPerPage, setCodesPerPage] = useState(10);
  const [displayedTags, setDisplayedTags] = useState(3);
  const [previousBreakpoint, setPreviousBreakpoint] = useState('');
  const [showCodes, setShowCodes] = useState(codes);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();

  const topRef = useRef(null);


  // const totalPages = Math.ceil(dataTest.length / codesPerPage);
  const allTags = extractTagsAndSort(codes);

  // handel Search
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value)
  };
  const handleSearchSubmit = (searchQuery) => {
    onSearch(searchQuery)
  };
  const clearSearch = () => {
    setSearchQuery('');
    onSearch("")
  };

  const searchString = (tag) => {
    scrollToTop();
    setSearchQuery(tag); // Update searchQuery state
    onSearch(tag)
  };

  const onSearch = (searchQuery) => {
    console.log(searchQuery);
    const lowerCaseSearch = searchQuery.toLowerCase();
    const filtered = codes.filter((code) => {

      // Check if searchQuery exists in title or any tag
      return code.title.toLowerCase().includes(lowerCaseSearch) || code.tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearch));
    });
    setShowCodes(filtered)
  }

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
      });
    }
  };

  // handel Search




  // handel change size

  const onChangeToXl = () => {
    setDisplayedTags(20);
  };

  const onChangeFromXl = () => {
    setDisplayedTags(10);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newBreakpoint = width >= 1280 ? 'xl' : 'lg';

      if (newBreakpoint !== previousBreakpoint) {
        if (newBreakpoint === 'xl') {
          onChangeToXl();
        } else {
          onChangeFromXl();
        }
        // Update the previousBreakpoint synchronously
        setPreviousBreakpoint(newBreakpoint);
      }
    };
    window.addEventListener('resize', handleResize);
    // Call handler once initially to set the initial state
    handleResize();
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [previousBreakpoint]);
  // handel change size




  useEffect(() => {
    const searchParamValue = searchParams.get('search');
    console.log('searchParamValue = ' + searchParamValue);
    if (searchParamValue) {
      searchString(searchParamValue)
    }
  }, [searchParams]);



  // const getVisibleMessages = () => {
  //   const startIndex = (currentPage - 1) * messagesPerPage;
  //   const endIndex = startIndex + messagesPerPage;
  //   return messages.slice(startIndex, endIndex);
  // };

  // const renderPagination = () => {
  //   const pageNumbers = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     pageNumbers.push(
  //       <PaginationButton
  //         key={i}
  //         pageNumber={i}
  //         currentPage={currentPage}
  //         handlePageChange={handlePageChange}
  //       >
  //       </PaginationButton>
  //     );
  //   }
  //   return <div className="flex w-10 h-10 justify-center gap-2">{pageNumbers}</div>;
  // };

  return (
    <PageBox title={'Code'}>

      <div ref={topRef} className='flex flex-col min-h-screen items-center'>
        <Search searchQuery={searchQuery} onSearchChange={handleSearchChange} onSearchSubmit={handleSearchSubmit} onClear={clearSearch} />
        <MostUseTag tags={allTags.slice(0, displayedTags)} onClick={searchString} />
        {
          !showCodes.length && < Information text={'No post found'} />
        }
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4">

          {showCodes.map((code) => (
            <CodeItem key={code.id} {...code} />
          ))}
        </div>

        <ScrollToTopButton onClick={scrollToTop} />
        {/* <div className=" h-full flex justify-center items-end mt-4">{totalPages > 1 && renderPagination()}</div> */}
      </div>

    </PageBox>
  );
}
