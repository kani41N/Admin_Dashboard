import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";

function NavNotice() {
  return (
    <div>
        <li className='nav-item dropdown p-2'>
            <a href='' className='nav-link nav-icon' data-bs-toggle='dropdown'>
              <IoNotificationsOutline size={26} />
              <span className='badge bg-primary badge-number rounded-circle'>4</span>
            </a>

            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
              <li className='dropdown-header'>
                You have 4 new notifications
                <a href='#'>
                    <span className='badge rounded-pill p-2 ms-2'> view all</span>
                </a>
              </li>

              <li>
                <hr className='dropdown-divider' />
              </li>
              
              <li className='notification-item'>
                <IoIosCloseCircleOutline size={25} className='text-primary'/>
               <div>
                 <h4>Lorem ipsum.</h4>
                 <p>Lorem ipsum dolor sit amet.</p>
                 <p>30 min. ago</p>
               </div>
              </li>

              <li>
                <hr className='dropdown-divider' />
              </li>

              <li className='notification-item'>
               <CiCircleCheck size={25} className='text-primary'/>
               <div>
                <h4>Lorem, ipsum.</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>1 hr, ago</p>
               </div>
              </li>

              <li>
                <hr className='dropdown-divider' />
              </li>

              <li className='notification-item'>
               <CiCircleAlert size={25} className='text-danger'/>
               <div>
                <h4>Lorem, ipsum.</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>2 hr, ago</p>
               </div>
              </li>

              <li>
                <hr className='dropdown-divider' />
              </li>
              
              <li className='notification-item'>
               <CiCircleQuestion size={25} className='text-danger'/>
               <div>
                <h4>Lorem, ipsum.</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>4 hr, ago</p>
               </div>
              </li>

              <li>
                <hr className='dropdown-divider' />
              </li>

              <li className='dropdown-footer'>
               <a href=''> Show all notifications</a>
              </li>
            </ul>
        </li>
    </div>
  )
}

export default NavNotice;