import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useDebounce from './useDebounce/useDebounce'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useDebounce((term) => {
    // Perform search operation with the debounced term
    console.log('Searching for:', term);
    // const res = await fetch(
    //   `https://demo.dataverse.org/api/search?q=${term}`
    // );
    // const json = await res.json();
    // console.log(json);
  }, 500);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Debounce the search callback
    handleSearch(value);
  };
  return (
    <>
      <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search..."
    />
    </>
  )
}

export default App
