import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsXLg } from 'react-icons/bs'
import { urlFor } from '../lib/client'
const logo = '/assets/images/aceva.png'
const burgerMenu1 = '/assets/images/icons/menu.png'

function Header({headers}) {

  const [menuToggle, setMenuToggle] = useState(false);
  const [sticky, setSticky] = useState(typeof window !== 'undefined' && window.scrollY); 
  const [notifyToggle, setNotifyToggle] = useState(false)

  const headerSticky = () => {
    if(typeof window != 'undefined') {
      setSticky(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', headerSticky)
      return () => window.removeEventListener('scroll', headerSticky)
    }

  }, [])

  const isScrolled = sticky >= 1

  // const isUser = localStorage.getItem('userInfo')

  // // click to logout user
  // const handleLogout = () => {
  //   localStorage.removeItem('userInfo')
  //   // navigate('/')
  // }

  return (
    <section className={isScrolled ? 'header-section active' : 'header-section'}>
      <div className='container'>
        <header>
          

          {/* chatbot credit */}
          <div className='login-logo header-logo'>
              <Link href="/">
                 <img src={logo} alt="site logo" />
                 { headers?.image && <img src={urlFor(headers?.image).url()} alt="header logo" /> }
                {/* <h2><span className='orangered'></span> ACEVA</h2> */}
              </Link>
          </div>

          <div className="mobile-header-right">
            {/* action button */}
            <div className="mobile-action-btn desktop-hide">
              <Link href="/demo"> Demo </Link>
            </div>

            {/* mobile burger menu */}
            <div onClick={() => setMenuToggle(!menuToggle)} className="mobile-header-burger-menu desktop-hide">
              <img src={burgerMenu1} alt="burger" />
            </div>
          </div>

          {/* navbar */}
          <nav className={menuToggle ? "active" : ""}>
            <BsXLg onClick={() => setMenuToggle(!menuToggle)} className='cross-mobile-navbar desktop-hide' />
            <ul className='navbar-wrappper'>
              {/* <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li> */}
              <li className='nav-item'><Link href='/' className='nav-link'> ACEVA </Link></li>
              <li className='nav-item'><Link href='/pricing' className='nav-link'> Pricing </Link></li>
              <li className='nav-item'><Link href='/blog' className='nav-link'> Blog </Link></li>
              <li className='nav-item demon-btn'><Link href='/demo' className='nav-link'> Demo </Link></li>

              {/* <li className='nav-item'>
                { isUser ? <Link onClick={handleLogout} to='#' className='nav-link logout-link'>Logout</Link> : <Link to='/login' className='nav-link'>LOGIN</Link> }
              </li> */}
              
            </ul>
          </nav>
        </header>
      </div>
    </section>
  )
}

export default Header 