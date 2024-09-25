import React, { useState } from 'react';
import './sideBar.css';
import { CiGrid41 } from "react-icons/ci";
import { BsMenuButtonWide } from "react-icons/bs";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { BiCircle } from "react-icons/bi";
import { BsJournalRichtext } from "react-icons/bs";
import { BsLayoutWtf } from "react-icons/bs";
import { IoStatsChartOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import navList from '../data/navList';
import NavItem from './NavItem'

function SideBar() {
  // State to track which section is expanded
  const [expandedSection, setExpandedSection] = useState('');

  // Function to toggle sections
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <aside id='sidebar' className='sidebar'>
      <ul className="sidebar-nav" id='sidebar-nav'>
        
        {/* Dashboard Link */}
        <li className='nav-item' style={{ backgroundColor: '#f0f0f0',  borderRadius: '8px'}}>
          <a href='#' className='nav-link'>
            <CiGrid41 size={25} />
            <span>Dashboard</span>
          </a>
        </li>

        {/* Documents Section */}
        <li className='nav-item'>
          <a 
            href='#' 
            className='nav-link collapsed' 
            onClick={() => toggleSection('documents')}
          >
            <BsMenuButtonWide size={25} />
            <span>Documents</span>
            {expandedSection === 'documents' ? (
              <IoChevronUp size={25} className="ms-auto" />
            ) : (
              <IoChevronDown size={25} className="ms-auto" />
            )}
          </a>

          <ul 
            id='documents-nav' 
            className={`nav-content collapse ${expandedSection === 'documents' ? 'show' : ''}`}
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href='#'>
                <BiCircle size={25}/>
                <span>Customer</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <BiCircle size={25}/>
                <span>Suppliers</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <BiCircle size={25}/>
                <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Forms Section */}
        <li className='nav-item'>
          <a 
            href='#'
            className='nav-link collapsed'
            onClick={() => toggleSection('forms')}
          >
            <BsJournalRichtext size={25}/>
            <span>Forms</span>
            {expandedSection === 'forms' ? (
              <IoChevronUp size={25} className="ms-auto" />
            ) : (
              <IoChevronDown size={25} className="ms-auto" />
            )}
          </a>

          <ul 
            id='forms-nav' 
            className={`nav-content collapse ${expandedSection === 'forms' ? 'show' : ''}`}
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href='#'>
                <BiCircle size={25}/>
                <span>Application Form</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <BiCircle size={25}/>
                <span>Release Form</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <BiCircle size={25}/>
                <span>Cancellation Form</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Tables Section */}
        <li className='nav-item'>
          <a 
            href='#'
            className='nav-link collapsed'
            onClick={() => toggleSection('tables')}
          >
            <BsLayoutWtf size={25} />
            <span>Table</span>
            {expandedSection === 'tables' ? (
              <IoChevronUp size={25} className="ms-auto" />
            ) : (
              <IoChevronDown size={25} className="ms-auto" />
            )}
          </a>

          <ul 
            id='tables-nav' 
            className={`nav-content collapse ${expandedSection === 'tables' ? 'show' : ''}`}
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href='#'>
              <BiCircle size={25}/>
                <span>General Tables</span>
              </a>
            </li>
            <li>
              <a href='#'>
              <BiCircle size={25}/>
                <span>Data Tables</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Charts Section */}
        <li className='nav-item'>
          <a 
            href='#'
            className='nav-link collapsed'
            onClick={() => toggleSection('charts')}
          >
            <IoStatsChartOutline size={25} />
            <span>Charts</span>
            {expandedSection === 'charts' ? (
              <IoChevronUp size={25} className="ms-auto" />
            ) : (
              <IoChevronDown size={25} className="ms-auto" />
            )}
          </a>

          <ul 
            id='charts-nav' 
            className={`nav-content collapse ${expandedSection === 'charts' ? 'show' : ''}`}
            data-bs-parent='#sidebar-nav'
          >
            <li>
              <a href='#'>
              <BiCircle size={25}/>
                <span>General Tables</span>
              </a>
            </li>
            <li>
              <a href='#'>
              <BiCircle size={25}/>
                <span>Data Tables</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Icons Section */}
        <li className='nav-item'>
          <a 
            href='#'
            className='nav-link collapsed'
            onClick={() => toggleSection('icons')}
          >
            <AiOutlineDollar size={25} />
            <span>Icons</span>
            {expandedSection === 'icons' ? (
              <IoChevronUp size={25} className="ms-auto" />
            ) : (
              <IoChevronDown size={25} className="ms-auto" />
            )}
          </a>

          <ul 
            id='icons-nav' 
            className={`nav-content collapse ${expandedSection === 'icons' ? 'show' : ''}`}
            data-bs-parent='#sidebar-nav'
          >
             <li>
              <a href='#'>
              <BiCircle size={25}/>
                <span>Bootstrap Icons</span>
              </a>
            </li>
            <li>
              <a href='#'>
              <BiCircle size={25}/>
                <span>Remix Icons</span>
              </a>
            </li>
            <li>
              <a href='#'>
              <BiCircle size={25}/>
                <span>Box Icons</span>
              </a>
            </li>
          </ul>
        </li>
      
        <li className='nav-heading'>Pages</li>
           {navList.map(nav => (
             <NavItem key={nav._id} nav={nav}/>
           ))}

      </ul>
    </aside>
  );
}

export default SideBar;
