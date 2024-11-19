import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {
  return (
      <div className='player'>
          <img src={back_arrow_icon} alt="" className="" />
          <iframe width='90%' height='90%' src='https://www.youtube.com/embed/jfWa-GD0szU' className="" title='trailer' frameBorder='0' allowFullScreen ></iframe>
          <div className="player-info">
              <p className="">Published Date</p>
              <p className="">Name</p>
              <p className="">Type</p>
          </div>
    </div>
  )
}

export default Player