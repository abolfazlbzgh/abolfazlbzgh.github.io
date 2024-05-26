import React, { useState } from 'react'
import CloseIcon from '../Icons/CloseIcon'

export default function  Search({ searchQuery, onSearchChange, onSearchSubmit , onClear }) {

    // const [searchQuery,setSearchQuery] = useState(); 

    // const searchClick = (event) => {
    //     event.preventDefault();
    //     onSearch(searchQuery);
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(searchQuery); // Pass updated searchQuery to parent
      };


    return (

        <form className="w-full mx-auto my-4 " onSubmit={handleSubmit}>
            {/* <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white ">Search</label> */}
            <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="text" value={searchQuery} onChange={onSearchChange} id="default-search" className="block w-full p-4 ps-10 text-sm  border rounded-lg  dark:text dark:text-white  bg-primary/10  dark:bg-black/10 text" placeholder="Search Tags, Titles ..." required />
                <span onClick={onClear} className=' cursor-pointer hover:scale-95 absolute end-2.5 bottom-2.5   w-8 h-8 p-1 text-gray-500 dark:text-gray-400'>
                    <CloseIcon/>
                </span>
                {/* <button type="submit" className="text-white hover:scale-95 absolute end-2.5 bottom-2.5 gradient  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 " >Search</button> */}
            </div>
        </form>

    )
}
