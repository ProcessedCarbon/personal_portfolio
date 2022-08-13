import React, {useEffect, useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {BsPhone} from 'react-icons/bs'

export const ThemeContext = React.createContext()

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  useEffect(() => {
    // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if(window.innerWidth <= 1024 && window.innerWidth > 600){     
      {/* Tablet support */}
      if(window.pageYOffset >= 660 && window.pageYOffset < 1938){
        setActiveNav('#about');
      }
      else if(window.pageYOffset >= 1938 && window.pageYOffset < 3106){
        setActiveNav('#experience');
      }
      else if(window.pageYOffset >= 3106 && window.pageYOffset < 5990){
        setActiveNav('#portfolio');
      }
      else if(window.pageYOffset >= 5990){
        setActiveNav('#contact');
      }    
      else{
        setActiveNav('#');
      }
    }
    else if(window.innerWidth <= 600){
      {/* Tablet support */}
      if(window.pageYOffset >= 680 && window.pageYOffset < 2075){
        setActiveNav('#about');
      }
      else if(window.pageYOffset >= 2075 && window.pageYOffset < 3117){
        setActiveNav('#experience');
      }
      else if(window.pageYOffset >= 3117 && window.pageYOffset < 5407){
        setActiveNav('#portfolio');
      }
      else if(window.pageYOffset >= 5407){
        setActiveNav('#contact');
      }    
      else{
        setActiveNav('#');
      }
    }
    else{
      if(window.pageYOffset >= 550 && window.pageYOffset < 1480){
        setActiveNav('#about');
      }
      else if(window.pageYOffset >= 1480 && window.pageYOffset < 2262){
        setActiveNav('#experience');
      }
      else if(window.pageYOffset >= 2262 && window.pageYOffset < 3900){
        setActiveNav('#portfolio');
      }
      else if(window.pageYOffset >= 3900){
        setActiveNav('#contact');
      }    
      else{
        setActiveNav('#');
      }
    }
  }, [window.pageYOffset])
  
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFolderOpen/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsPhone/></a>
    </nav>
  )
}
export default Nav
