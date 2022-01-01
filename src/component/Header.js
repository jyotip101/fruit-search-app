import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useGlobalContext } from './context'
import logoImg from '../img/fruit.png'

const Header = () => {
  const { isMenuOpen, openMenu, closeMenu } = useGlobalContext()
  return (
    <>
      <nav>
        <div className='header-container'>
          <Link className='logo' to='/fruit-search-app'>
            <img className='logo-img' src={logoImg} alt='logoImg' />
            Fruit Search App
          </Link>
          <button className='menu-logo' onClick={openMenu}>
            <span className='material-icons'>expand_more</span>
          </button>

          <ul className='links-items'>
            <li>
              <Link className='link' to='/fruit-search-app'>
                Home
              </Link>
            </li>
            <li>
              <Link className='link' to='/about'>
                About
              </Link>
            </li>
          </ul>

          {/* mobile menu links */}
          <ul className={`${isMenuOpen ? 'mobile-menu' : 'mobile-menu-hide'}`}>
            <button
              className={`${isMenuOpen ? 'close-logo' : 'close-logo-hide'}`}
              onClick={closeMenu}
            >
              <span className='material-icons'>expand_less</span>
            </button>

            <li onClick={closeMenu}>
              <Link className='link' to='/fruit-search-app'>
                Home
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link className='link' to='/about'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Header
