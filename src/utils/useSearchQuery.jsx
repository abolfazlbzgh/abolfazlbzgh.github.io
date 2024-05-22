import { useState } from 'react';

export default function useSearchQuery() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return { searchQuery,setSearchQuery, handleSearchChange };
}