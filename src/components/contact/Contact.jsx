import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {RiTelegramLine} from 'react-icons/ri'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nvlf4wo', 'template_ko7czbg', form.current, 'IebWPk08v9LmIxHxM')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Let's Chat</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>

         <article className='contact_option'>
          <HiOutlineMail className='contact_option-icons'/>
          <h4>Email</h4>
          <h5>gregorywng6@gmail.com</h5>
          <a href="mailto:gregorywng6@gmail.com" target="_blank" rel="noreferrer">Email Me</a>
         </article>

         <article className='contact_option'>
          <AiOutlineInstagram className='contact_option-icons'/>
          <h4>Instagram</h4>
          <h5>@gregory_w0ng</h5>
          <a href="https://www.instagram.com/gregory_w0ng/" target="_blank" rel="noreferrer">Drop a Follow!</a>
         </article>

         <article className='contact_option'>
          <AiOutlineWhatsApp className='contact_option-icons'/>
          <h4>Whatsapp</h4>
          <h5>+65 8374 8871</h5>
          <a href="https://wa.me/+6583748871" target="_blank" rel="noreferrer">Whatsapp Me!</a>
         </article>

         <article className='contact_option'>
          <RiTelegramLine className='contact_option-icons'/>
          <h4>Telegram</h4> 
          <h5>@yrogerg_97</h5>
          <a href="https://t.me/+6583748871" target="_blank" rel="noreferrer">Telegram Me!</a>
         </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact