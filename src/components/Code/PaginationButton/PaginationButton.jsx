import React from 'react';

const PaginationButton = ({ pageNumber, currentPage, handlePageChange }) => {
    return (
        <button
            key={pageNumber}
            className={`px-2 py-1 min-w-10 rounded-full shadow-lg dark:shadow-white dark:shadow-sm font-medium hover:gradient  ${currentPage === pageNumber ? 'gradient' : ' text-text-dark'
                }`}
            onClick={() => handlePageChange(pageNumber)}
        >
            {pageNumber}
        </button>
    );
};

export default PaginationButton;
