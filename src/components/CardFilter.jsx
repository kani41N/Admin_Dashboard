import React from 'react';
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

function CardFilter({filterChange}) {
  return (
    <div className='filter'>
      <a href='#' className='icon' data-bs-toggle='dropdown'>
       <div className='d-flex justify-content-end px-2'>
        <TfiLayoutMenuSeparated  size={25} />
       </div>
      </a>
      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow'>
        <li className='dropdown header text-start'>
            <h6>Filter</h6>
        </li>
        <li>
         <a className='dropdown-item'  onClick={() => filterChange('Today')}>
            Today
         </a>
        </li>
        <li>
            <a className='dropdown-item' onClick={() => filterChange('This Month')}>
                This Month
            </a>
        </li>
        <li>
            <a className='dropdown-item' onClick={() => filterChange('This Year')} >
                This Year
            </a>
        </li>

      </ul>
    </div>
  )
}

export default CardFilter;
