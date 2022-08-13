import React from 'react'
import './about.css'
import ME from '../../assets/meme.jpeg'
import StatBar from './StatBar.jsx'
import { useInView } from 'react-intersection-observer'
const observerOptions = {
  root: null,
  threshold: 0.1
}

const containerOptions = {
  root: null,
  threshold: 0.5
}

const About = () => {
	const {ref: stat_ref, inView: elementVisibility} = useInView(observerOptions);
	const {ref: about_me_ref, inView: about_me_visible} = useInView(containerOptions);
  
  return (
    <section id='about'>
      
      <h5>More About Me</h5>
      <h2>Attributes</h2>

      <div className='container about_container' ref={about_me_ref}  >
        <div className = {`about_me about_me_animation intro ${`${about_me_visible}` === "true" ? " play" : ""}`}>
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
          <h3>I'm shy....</h3>
          <h5>Hover over to see me</h5>
        </div>

        <div className="about_content">
          <div className='stat_graph' ref={stat_ref}>
            
            <article className="attribute">
              <h5>INTELLIGENCE</h5>
              <StatBar done = {`${elementVisibility}` === 'true' ? '40' : '0'} text='Not the brightest.'/>
            </article>

            <article className="attribute">
              <h5>PERCEPTION</h5>
              <StatBar done = {`${elementVisibility}` === 'true' ? '20' : '0'} text='4-Eyes'/>
            </article>

            <article className="attribute">
              <h5>WISDOM</h5>
              <StatBar done = {`${elementVisibility}` === 'true' ? '35' : '0'} text='Still much to learn'/>
            </article>

            <article className="attribute">
              <h5>WILLPOWER</h5>
              <StatBar done = {`${elementVisibility}` === 'true' ? '85' : '0'} text='Makes up for the INTELLIGENCE portion'/>
            </article>

            <article className="attribute">
              <h5>CHARISMA</h5>
              <StatBar done = {`${elementVisibility}` === 'true' ? '50' : '0'} text='Quick to stutter, stutter too quickly.'/>
            </article>

          </div>
          <p className = {`about_content_p_animation intro ${`${about_me_visible}` === "true" ? " play" : ""}`}>
              Hi there! A bit of introduction here, I am Gregory Wong, an undergraduate currently studying Computer Science
              in NTU. My interest are games, coding and hanging out with friends.I started coding when I entered Polytechnic 
              and really liked it during my time there learning Game Development. I learn mostly by doing so I really enjoy 
              working on and building projects whenever any idea comes into my mind. I'm not the brightest but I definitely 
              put in effort on what I am doing and consider myself a fairly proactive person when it comes to my own growth.
          </p>
        </div>
      </div>

      <div className='contact_btn'>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>

    </section>
  )
}

export default About