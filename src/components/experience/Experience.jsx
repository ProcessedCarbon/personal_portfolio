import React from 'react'
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

          <div className="experience_content-coding" ref={exp_ref}>
            {/* SHOWN START */}
            <div className="shown">
              {/* REACT */}
              <article className="experience_details">
                <Skillbar className='skill-bar' skillname='Go' skilllevel='Basic' skillvalue={`${elementVisibility}` === 'true' ? '20' : '0'}/>
                <p className='text-light'>
                  Still currently a beginner.
                </p>
              </article>

              {/* C# */}
              <article className="experience_details">
                <Skillbar className='skill-bar' skillname='C#' skilllevel='Proficient' skillvalue={`${elementVisibility}` === 'true' ? '65' : '0'}/>
                <p className='text-light'>
                  Fair experience as most of my projects below were done using this langauge.
                </p>
              </article>

              {/* Java */}
              <article className="experience_details">
                <Skillbar className='skill-bar' skillname='Lua' skilllevel='Intermediate' skillvalue={`${elementVisibility}` === 'true' ? '50' : '0'}/>
                <p className='text-light'>
                  Did a single project and a few assessments.
                </p>
              </article>

              {/* Python */}
              <article className="experience_details">
                <Skillbar className='skill-bar' skillname='Python' skilllevel='Intermediate' skillvalue={`${elementVisibility}` === 'true' ? '45' : '0'}/>
                <p className='text-light'>
                  Fairly confident in this language.
                </p>
              </article>
            </div>
            {/*SHOWN END */}
            <div className="hidden">
              <p>
                Most of my experience in coding has been in making games. It was only after I 
                enrolled in University was I exposed to the various different applications of
                it. From there I began to do my own research and tried out different applications 
                (one of it being this website). Though I am still very much inexperienced, I have a
                strong interest in it would dabble in it during my spare time.
              </p>
              <p>
                I prefer practical over theory most of the time and thus almost always prefer building/
                making something. However, I do understand that coding is heavily theoritical subject and
                requires a certain level of understanding about the technicalities and thus, ever so reluctantly
                do do my readings on certain aspects at times.
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