import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import YOURIMG from '../images/kani.png';
import './avatar.css';  


function NavAvatar() {
  return (
    <div>
        <li className='nav-item dropdown p-1'>
            <a href='#' className='nav-link nav-profile d-flex align-items-center ' data-bs-toggle='dropdown'>
            <img src={YOURIMG} alt='profile' className='rounded-circle'/> 
            <span className='d-none d-md-block dropdown-toggle ps-2'>N. Kani</span>
            </a>
        </li>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
            <li className='dropdown-header'>
                <h6>Kani</h6>
                <span>Web Developer</span>
            </li>
            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li>
                <a className='dropdown-item d-flex align-items-center' 
                href='users-profile.html'></a>
                <IoPersonOutline size={25}/>
                <span>My profile</span>
            </li>
            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li>
                <a className='dropdown-item d-flex align-items-center' 
                href='users-profile.html'></a>
                <GoGear size={25}/>
                <span>Account settings</span>
            </li>
            <li>
                <hr className='dropdown-divider'/>
            </li>
 
            <li>
                <a className='dropdown-item d-flex align-items-center' 
                href='users-profile.html'></a>
                <AiOutlineQuestionCircle size={25}/>
                <span>Need help?</span>
            </li>
            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li>
              <a className='dropdown-item d-flex align-items-center' href=''></a>
              <FaArrowRightFromBracket size={25} />
              <span>Sign out</span>
            </li>

        </ul>
    </div>
  )
}

export default NavAvatar;