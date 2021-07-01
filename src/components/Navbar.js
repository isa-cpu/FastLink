import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/logo.jpeg'
import { Button } from './Button'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [loading, setLoading] = useState(true)

  const handleClick = () => {
    setClick(!click)
  }
  const closeMobileMenu = () => {
    setClick(false)
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', showButton)
  }, [])
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            FLPHONES <i className='fab fa-typo3'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>
                Shop
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button>Sign Up</Button>}
        </div>
        <nav className='dropdown'>
          <div>whwre</div>
        </nav>
      </nav>
    </>
  )
}

export default Navbar
