import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">

        <div className="header_centerpiece">
          <div className="center">
            <h5>Hello I'm,</h5>
            <h1 className="main">GREG</h1>
            <small className="text-light">Student of Programming</small>
            <CTA />
          </div>

          <HeaderSocials />
          <div className='scroll_down'>
            <a href="#contact" >Scroll Down</a>
            <i className='arrow down'></i>
            <i className='arrow down'></i>
          </div>

        </div>
      </div>      
    </header>
  )
}

export default Header