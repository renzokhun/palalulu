import React, { useState } from 'react';

function Header() {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();

    setDropdownOpen(!isDropdownOpen);
  };

    return (
      <nav className="header">
        <li className='default-header'>
          <a href="/my-website/"><i class="fa-solid fa-house"></i>Home</a>
        </li>
        <li className='default-header'>
            <a href="/my-website/about"><i class="fa-regular fa-user"></i>About</a>
        </li>
        <li className='default-header'>
            <a href="/my-website/projects"><i class="fa-solid fa-laptop-code"></i>Projects</a>
        </li>
        <li className='default-header'>
            <a href="/my-website/blog"><i class="fa-solid fa-blog"></i>Blog</a>
        </li>

        <li className='mobile-dropdown-menu'>
            <a href="#" onClick={toggleDropdown}><i class="fa-solid fa-bars"></i></a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/my-website/"><i class="fa-solid fa-house"></i>Home</a>
                </li>
                <li>
                    <a href="/my-website/about"><i class="fa-regular fa-user"></i>About</a>
                </li>
                <li>
                    <a href="/my-website/projects"><i class="fa-solid fa-laptop-code"></i>Projects</a>
                </li>
                <li>
                    <a href="/my-website/blog"><i class="fa-solid fa-blog"></i>Blog</a>
                </li>
              </ul>
          )}
        </li>
      </nav>
    )
  }
  
  export default Header