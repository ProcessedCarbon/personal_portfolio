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

            {/* Item FYP*/}
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
                        <h4>Polytechnic Final Year Project</h4>
                        <small className='text-light'>Full year project</small>
                      </div>
                    </div>

                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>Aggregation of Polytechnic experience</h4>
                        <small className='text-light'>Used everything I learnt so far in Polytechnic.</small>
                      </div>
                    </div>

                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>Larger team</h4>
                        <small className='text-light'>Designer, 2 Programmers and 5 Artists</small>
                      </div>
                    </div>

                  </div>

                  <div className="hidden">
                    <p>
                      The Final Year Polytechnic project where I used everything I had learnt thus far to create.
                      Was the main programmer for the project which lead to a bigger contribution to the code base.
                    </p>
                    <p>
                      Heavily practiced OOP and Agile methodlogies throughout this project.
                    </p>
                    <p>
                      AI was made using a finite-state-machine with Unity NavMesh for pathfinding.
                    </p>
                    <p>
                      Created camera culling of objects obstructing camera when traversing the level.
                    </p>
                    <p>
                      Object pooling was integrated(<em>Enemies, Spawned Items, Bullets</em>) to optimise performance as much as possible.
                    </p>
                    <p>
                      Occlusion culling and baked lighting done for optimization.
                    </p>
                    <p>
                      Worked with artists to tntegrte UI, Animation, SFX, VFX and Models.
                    </p>
                    <p>
                      Maximize reusing of assets while not compromising quality.
                    </p>
                  </div>

                </div>
              </div>
            </article>

{/* Item TD*/}
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
                        <h4>2nd Year project</h4>
                        <small className='text-light'>Done in Unity</small>
                      </div>
                    </div>


                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>Worked with another programmer</h4>
                        <small className='text-light'>2 Programmers, 1 Designer, 2 Artist</small>
                      </div>
                    </div>


                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>Worked mostly on Pathfinding, UI and Camera</h4>
                        <small className='text-light'>Coded in C#</small> 
                      </div>
                    </div>

                  </div>

                  <div className="hidden">
                    <p>
                      Done in Unity Game Engine and was my first experience working with another programmer. We
                      split the work based on features and tried our best not to have each other working on
                      overlapping features. However there were times when it was necessary which communication played
                      a key role in ensuring a smooth workflow. Practiced OOP and some Agile methodlogies throughout
                      the project. Pathfinding and UI were done via Unity's inhouse systems (NavMesh & UnityUI), Camera movement 
                      done by shfting coordinates with no extra camera filters or effects.
                    </p>
                  </div>

                </div>
              </div>
            </article>

            {/* Item Puzzle */}
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
                        <h4>Polytechnic Yr 1 Project</h4>
                        <small className='text-light'>Created in 2015.</small>
                      </div>
                    </div>

                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>Made with 5 people</h4>
                        <small className='text-light'> Programmer(Me), Designer, 3 Artist.</small>
                      </div>
                    </div>

                    <div className='description_group'>
                      <i><RiCheckboxMultipleLine/></i>
                      <div>
                        <h4>Made in Adobe Animate CC</h4>
                        <small className='text-light'>Coded with ActionScript</small>
                      </div>
                    </div>

                  </div>

                  <div className="hidden">
                    <p>
                      My first larger scale studio project in Polytechnic. Participated in the project as the 
                      programmer. Movement in game is done through changing coordinates and the puzzles are
                      made through referencing animation states. Setting all the wheels in the correct states
                      solves the puzzle. Also integrated all the animations, sprites and SFX in game. Learnt alot
                      about the fundamentals of coding, project management and working in a team. 
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