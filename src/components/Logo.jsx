import React from 'react';
import './logo.css';
import { MdOutlineMenu } from "react-icons/md";

function Logo() {
  const handleToggleSideBar = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-hidden');
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <a href="/" className="logo text-decoration-none text-dark d-flex align-items-center">
        {/* <img src='' alt=''/> */}
        <span className="fs-4 fw-bold d-none d-lg-block">Admin Dashboard</span>
      </a>
      <MdOutlineMenu 
        onClick={handleToggleSideBar}
        className="ms-5 toggle-sidebar-btn" size={26} 
      />
    </div>
  );
}

export default Logo;
