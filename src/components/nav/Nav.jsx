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
    console.log(window.scrollY)
    if(window.innerWidth <= 1024 && window.innerWidth > 600){     
      {/* Tablet support */}
      if(window.scrollY >= 660 && window.scrollY < 1938){
        setActiveNav('#about');
      }
      else if(window.scrollY >= 1938 && window.scrollY < 3106){
        setActiveNav('#experience');
      }
      else if(window.scrollY >= 3106 && window.scrollY < 4190){
        setActiveNav('#portfolio');
      }
      else if(window.scrollY >= 4190){
        setActiveNav('#contact');
      }    
      else{
        setActiveNav('#');
      }
    }
    else if(window.innerWidth <= 600){
      {/* Tablet support */}
      if(window.scrollY >= 680 && window.scrollY < 2075){
        setActiveNav('#about');
      }
      else if(window.scrollY >= 2075 && window.scrollY < 3117){
        setActiveNav('#experience');
      }
      else if(window.scrollY >= 3117 && window.scrollY < 4507){
        setActiveNav('#portfolio');
      }
      else if(window.scrollY >= 4507){
        setActiveNav('#contact');
      }    
      else{
        setActiveNav('#');
      }
    }
    else{
      if(window.scrollY >= 550 && window.scrollY < 1480){
        setActiveNav('#about');
      }
      else if(window.scrollY >= 1480 && window.scrollY < 2262){
        setActiveNav('#experience');
      }
      else if(window.scrollY >= 2262 && window.scrollY < 3000){
        setActiveNav('#portfolio');
      }
      else if(window.scrollY >= 3000){
        setActiveNav('#contact');
      }    
      else{
        setActiveNav('#');
      }
    }
  }, [window.scrollY])
  
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
