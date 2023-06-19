import React from 'react'
import './skillbar.css'
const Skillbar = ({skillname, skilllevel, skillvalue}) => {
  let skillPercent = (100-skillvalue) * 4.4
  return (
    <div className='skill'>
        <div className="outer">
            <div className="inner">
                <div className='skill_name'>
                    <h4>{skillname}</h4>
                    <small className='text-light'>{skilllevel}</small>
                </div>
            </div>
        </div>
        <svg  className='circle-svg' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160">
         <circle className='circle-fill' cx="80" cy="80" r="70" strokeLinecap="round" strokeDashoffset={skillPercent} />
        </svg>
    </div>
  )
}

export default Skillbar