import React from 'react';

export default function ScrollToTopButton({onClick}) {

    return (
        <button
        className="fixed bottom-4 rotate-180 right-8 rounded-full w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white font-bold flex items-center justify-center shadow-lg"
        onClick={onClick}
        aria-label="Scroll to Top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7 7 7 -7" />
        </svg>
      </button>
    );
}