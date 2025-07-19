import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button-component/Button';
import './Navbar.css'

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };


  const closeMobileMenu = () => {
    setClick(false);
  };


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            RD ADVENTURES <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {
            button && sessionStorage.getItem('userItem') ?
              <div style={{color:'white', padding: '5px'}}>{ `Welcome ${ JSON.parse(sessionStorage.getItem('userItem')).firstName }
               ${ JSON.parse(sessionStorage.getItem('userItem')).lastName }` }
               <Button 
               buttonStyle='btn--outline' 
               link='/'
               onClick={() => {
                 sessionStorage.removeItem('userItem');
                 alert('You have been signed out successfully!');
                 window.location.reload();
               }}>
                SIGN OUT
                </Button>
              </div> :
              <Button buttonStyle='btn--outline' link='sign-up'>SIGN UP</Button>
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
