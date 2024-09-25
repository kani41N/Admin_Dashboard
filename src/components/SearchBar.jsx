import React from 'react';
import './searchBar.css';
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className='search-bar d-flex justify-items-center'>
        <form method='POST' action='#'>
          <input type='search' 
           name='query'
           placeholder='Search'/>

           <button type='submit'>
             <CiSearch size={22}/>
           </button>
        </form>
    </div>
  )
}

export default SearchBar;