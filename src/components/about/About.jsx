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
            <img src={ME} />
          </div>
          <h3>Hover over to see me</h3>
        </div>

        <div className="about_content">
          <div className='stat_graph' ref={stat_ref}>
            
            <article className="attribute">
              <h5>EAGERNESS TO LEARN</h5>
              <StatBar done = {`${elementVisibility}` === 'true' ? '100' : '0'} text='Always trying to improve.'/>
            </article>

            <article className="attribute">
              <h5>ADAPTABILITY</h5>
              <StatBar done = {`${elementVisibility}` === 'true' ? '60' : '0'} text='Longer time needed in newer situations.'/>
            </article>

            <article className="attribute">
              <h5>SELF-SUFFICIENT</h5>
              <StatBar done = {`${elementVisibility}` === 'true' ? '80' : '0'} text='But open to help from others.'/>
            </article>

            <article className="attribute">
              <h5>PROGRAMMING</h5>
              <StatBar done = {`${elementVisibility}` === 'true' ? '65' : '0'} text='In the process of improving.'/>
            </article>

            <article className="attribute">
              <h5>COMMUNICATION</h5>
              <StatBar done = {`${elementVisibility}` === 'true' ? '50' : '0'} text='Try to understand and be understood.'/>
            </article>

          </div>
          <p className = {`about_content_p_animation intro ${`${about_me_visible}` === "true" ? " play" : ""}`}>
              Hi there! A bit of introduction here, I am Gregory Wong, an undergraduate currently studying Computer Science
              in NTU. I enjoy building projects and spending my free time playing and creating games as well as exploring new
              aspects of software such as this website. This site not only serves as my platform for experimentation but also
              as a record for the works that I have taken part in (<em>feel free to browse below</em>). I am constantly looking
              for ways to grow and consistently aim to improve myself at what I do each day. If you have any question feel free
              to contact me and we can have a chat.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About