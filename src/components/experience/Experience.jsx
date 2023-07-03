import React, {useEffect} from 'react'
import './experience.css'
import {BsFileEarmarkCheckFill} from 'react-icons/bs'
import Skillbar from './Skillbar.jsx'
import { useInView } from 'react-intersection-observer'

const observerOptions = {
  root: null,
  threshold: 0.4
}
const skillBarOptions = {
  root: null,
  threshold: 0.1
}

const Experience = () => {
	const {ref: exp_ref, inView: elementVisibility} = useInView(skillBarOptions);
  const {ref: exp_container_ref, inView: containerVisibility} = useInView(observerOptions);
  const scroller = document.querySelector(".experience_content-coding");

  const handleScroll = (e) => {
    scroller.scrollTop = 0;
  };

  return (
    <section id='experience'>
      <h5>My Skill-Set</h5>
      <h2>Skills</h2>

      <div className="container experience_container" ref={exp_container_ref}>
        
        {/*EXPERIENCE_CODING_START*/}
        <div className={`experience_coding portfolio_container_animation intro ${`${containerVisibility}` === "true" ? " play" : ""}`}>
          <h3>Coding</h3>
          
          <div className="transition-group">
            <h5>to see</h5>
            <div className='transition-line'></div>
          </div>

          <div className="experience_content-coding" ref={exp_ref} onMouseLeave={handleScroll}>
            {/* SHOWN START */}
            <div className="shown">
              {/* REACT */}
              <article className="experience_details">
                <Skillbar className='skill-bar' skillname='Go' skilllevel='Intermediate' skillvalue={`${elementVisibility}` === 'true' ? '50' : '0'}/>
                <p className='text-light'>
                  Able to debug and write basic code to handle server-side.
                </p>
              </article>

              {/* C# */}
              <article className="experience_details">
                <Skillbar className='skill-bar' skillname='C#' skilllevel='Proficient' skillvalue={`${elementVisibility}` === 'true' ? '80' : '0'}/>
                <p className='text-light'>
                  Fair experience as most of my projects below were done using this langauge.
                </p>
              </article>

              {/* Java */}
              <article className="experience_details">
                <Skillbar className='skill-bar' skillname='Lua' skilllevel='Proficient' skillvalue={`${elementVisibility}` === 'true' ? '65' : '0'}/>
                <p className='text-light'>
                  Implement client-side features, coding of UI, debugging as well as interfacing with server-side.
                </p>
              </article>

              {/* Python */}
              <article className="experience_details">
                <Skillbar className='skill-bar' skillname='Python' skilllevel='Intermediate' skillvalue={`${elementVisibility}` === 'true' ? '55' : '0'}/>
                <p className='text-light'>
                  Did some data visualisations, model training and interfacing on RasberryPi in school.
                </p>
              </article>
            </div>
            {/*SHOWN END */}
            <div className="hidden">
              <h5>School</h5>
              <p>
                Most of my experience has been school projects in polytechnic where I made numerous amounts of
                games in my time there. The most notable ones(can be seen below) are bigger in scale and took the majority
                of the school year to complete. These projects required me to work in teams, learn new skills, take a creative
                approach to problem solving as well as effectively manage my tasks and time.
              </p>
              <h5>Internships</h5>
              <p>
                I did 2 internships one at <b>Neeuro</b> and <b>UDREAM Entertainment</b>. While I was at Neeuro I was mainly tasked with software
                testing and prototyping of new ideas. This showed me the gaps in my knowledge and experience, as well as gave me an
                opportunity to experience first-hand the SDLC and Agile.
              </p>
              <p>
                At <b>UDREAM</b> I was given the opportunity to debug and implement new features for the game. During my time there
                I became proficient in version control, debugging and feature implementation and integration. I also learnt the
                effectiveness of code reviews and understood the concept of maximum change of a system through minimum impact on
                the code base. 
              </p>
            </div>
          </div>
        </div>
        {/*EXPERIENCE_CODING_END*/}

        {/*EXPERIENCE_PROGRAMS_START*/}
        <div className={`experience_programs experience_programs_animation intro ${`${containerVisibility}` === "true" ? " play" : ""}`}>
          <h3>Programs</h3>
          <div className="experience_content-programs">

            <article className="experience_details">
              <BsFileEarmarkCheckFill className='experience_details-icons'/>
              <div>
                <h4>Unity</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFileEarmarkCheckFill className='experience_details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFileEarmarkCheckFill className='experience_details-icons'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFileEarmarkCheckFill className='experience_details-icons'/>
              <div>
                <h4>JIRA</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFileEarmarkCheckFill className='experience_details-icons'/>
              <div>
                <h4>Confluence</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFileEarmarkCheckFill className='experience_details-icons'/>
              <div>
                <h4>Gitlab</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
        </div>
        {/*EXPERIENCE_PROGRAMS_END*/}
      </div>

    </section>
  )
}

export default Experience