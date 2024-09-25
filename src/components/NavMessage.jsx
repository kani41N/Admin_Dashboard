import React from 'react';
import { TbMessageCircle } from "react-icons/tb";


function NavMessage() {
  return (
    <div>
        <li className='nav-item dropdown p-2'>
            <a href='' className='nav-link nav-icon' data-bs-toggle='dropdown'>
              <TbMessageCircle size={26} />
              <span className='badge bg-success badge-number rounded-circle'>3</span>
            </a>

            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
              <li className='dropdown-header'>
                You have 3 new message
                <a href='#'>
                    <span className='badge rounded-pill p-2 ms-2'> view all</span>
                </a>
              </li>

              <li>
                <hr className='dropdown-divider' />
              </li>
              
              <li className='notification-item'>
               <div>
                 <h4>Lorem ipsum.</h4>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nam...</p>
                 <p>5 min, ago</p>
               </div>
              </li>

              <li>
                <hr className='dropdown-divider' />
              </li>

              <li className='notification-item'>
               <div>
                <h4>Lorem, ipsum.</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, quo...</p>
                <p>30 min, ago</p>
               </div>
              </li>

              <li>
                <hr className='dropdown-divider' />
              </li>

              <li className='notification-item'>
               <div>
                <h4>Lorem, ipsum.</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>1 hr, ago</p>
               </div>
              </li>

              <li>
                <hr className='dropdown-divider' />
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

export default NavMessage;