import React from 'react';
import './pageTitle.css';
import { TiHomeOutline } from "react-icons/ti";

function PageTitle({page}) {
  return (
    <div className='pageTitle'>
        <h1>{page}</h1>
        <ul> 
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <a href='#'>
                      <TiHomeOutline size={24}/>
                    </a>
                </li>
                <li className='breadcrumb-item active'>{page}</li>
            </ol>
        </ul>
    </div>
  )
}

export default PageTitle;
