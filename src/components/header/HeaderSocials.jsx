/* Icons gotten from react-icons */

import React from 'react'
import './headersocials.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
// import {FaTiktok} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <div className="linked-in">
          <a href="https://www.linkedin.com/in/gregory-wong-9692b115a/" target="_blank" rel="noreferrer" className='linkedin-icon'><BsLinkedin/></a>
          <h5 className='tool-tip'>LinkedIn</h5>
        </div>
        {/* <div className="instagram">
          <a href="https://www.instagram.com/gregory_w0ng/" target="_blank" rel="noreferrer" className='instagram-icon'><AiOutlineInstagram/></a>
          <h5 className='tool-tip'>Instagram</h5>
        </div> */}
        {/* <div className="tiktok">
          <a href="https://www.tiktok.com/@gregorywng" target="_blank" className='tiktok-icon'><FaTiktok/></a>
          <h5 className='tool-tip'>TikTok</h5>
        </div> */}
    </div>
  )
}

export default HeaderSocials