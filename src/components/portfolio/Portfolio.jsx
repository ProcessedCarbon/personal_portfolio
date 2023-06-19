import React from 'react'
import './portfolio.css'
import GearWorks from '../../assets/GearWork_2016.mp4'
import EternalNight from '../../assets/EternalNight.mp4'
import DoubleTime from '../../assets/DoubleTime.mp4'
import ReactPlayer from 'react-player'
import{RiCheckboxMultipleLine} from 'react-icons/ri'
import { useInView } from 'react-intersection-observer'

const observerOptions = {
  root: null,
  threshold: 0.5
}

const Portfolio = () => {
  const {ref: portfolio_ref, inView: sectionVisibility} = useInView(observerOptions);
  return (
    <section id='portfolio' ref={portfolio_ref}>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className={`container portfolio_container experience_coding_animation intro ${`${sectionVisibility}` === "true" ? " play" : ""}`}>
          <div className="portfolio_items">
            {/* Item 1 */}
            <article className='portfolio_item'>
              <h2>GearWorks</h2>
              <div className="portfolio_video">
                <div className='video_wrapper'>
                  <ReactPlayer
                    width='100%' 
                    height="100%" 
                    controls={true} 
                    url={GearWorks}
                  />
                </div>
                <div className="portfolio_video-description">

                  <div className="shown">
                    <div className="description_group">
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>First game made</h4>
                        <small className='text-light'>Created in 2015.</small>
                      </div>
                    </div>

                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>Team of 5</h4>
                        <small className='text-light'>1 Programmers, 1 Designer, 3 Artist.</small>
                      </div>
                    </div>

                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>First experience in coding</h4>
                        <small className='text-light'>First time applying coding to making something.</small>
                      </div>
                    </div>

                  </div>

                  <div className="hidden">
                    <p>
                      My first ever game made between 2015-2016 as part of a studio project in Polytechnic.
                      Participated in the project as the main programmer and worked mainly on
                      most of the systems in the game. A very amateurish project as most of the
                      code was in a single class which made things like debugging extremely difficult
                      and tedious. However, a good learning experience overall but 10/10 would not do
                      it ever again.
                    </p>
                  </div>
                  
                </div>
              </div>
            </article>

            {/* Item 2*/}
            <article className='portfolio_item'>
              <h2>DoubleTime</h2>
              <div className="portfolio_video">
                <div className='video_wrapper'>
                  <ReactPlayer                   
                    width='100%' 
                    height='100%' 
                    controls={true}  
                    url={DoubleTime}
                  />
                </div>
                <div className="portfolio_video-description">
                <div className="shown">
                    <div className="description_group">
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>Poly Final Year Project</h4>
                        <small className='text-light'>1 year worth of work.</small>
                      </div>
                    </div>

                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>Made in Unity</h4>
                        <small className='text-light'>Used everything I learnt from Year 2 of using Unity.</small>
                      </div>
                    </div>

                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>90% of assets done inhouse</h4>
                        <small className='text-light'>Shaders and camera filters were online assets.</small>
                      </div>
                    </div>

                  </div>

                  <div className="hidden">
                    <p>
                      My Finaly Year Project for my last year in Polytechnic. Was my first time working in
                      a larger team of 7 so initially we had alot of complications and communication issues.
                      We resolved it my setting a multitude of systems to streamline certain processes and make
                      workflow more fluid. I used everything I learnt from working in Unity in year 2 for this project.
                      Was mainly responsible for most of the systems alongside another programmer, a few assets like 
                      the shaders of weapons after they drop and the vignette on the camera were gotten externally.
                    </p>
                  </div>

                </div>
              </div>
            </article>

            {/* Item 3*/}
            <article className='portfolio_item'>
              <h2>Eternal Night</h2>
              <div className="portfolio_video">
                <div className='video_wrapper'>
                  <ReactPlayer                   
                    width='100%' 
                    height="100%" 
                    controls={true}  
                    url={EternalNight}
                  />
                </div>
                <div className="portfolio_video-description">

                  <div className="shown">

                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>2nd Year final project</h4>
                        <small className='text-light'>Chance to push myself to learn more about Unity</small>
                      </div>
                    </div>


                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>Team of 5</h4>
                        <small className='text-light'>2 Programmers, 1 Designer, 2 Artist</small>
                      </div>
                    </div>


                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>Worked mostly on Pathfinding, UI and Camera</h4>
                        <small className='text-light'>Also did minor things like asset integration</small> 
                      </div>
                    </div>

                  </div>

                  <div className="hidden">
                    <p>
                      This was an opportunity for me to push myself to learning more subjects that were
                      outside of the curriculum since most of what was needed was not taught. Learnt quite
                      alot on this project and I would personally say that this project improved my understanding
                      of coding/ development the most. I think I grew and learnt alot in both technical and 
                      soft skills whilst working on this project.
                    </p>
                  </div>

                </div>
              </div>
            </article>
          </div>
        <div className='scroll-desp'>
          <div className="scroll-desp content">
            <h5>Scroll for more</h5>
            <div className="arrow-group">
              <i className='arrow right'></i>
              <i className='arrow right'></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio