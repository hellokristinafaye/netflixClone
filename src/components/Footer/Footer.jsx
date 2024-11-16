import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';


const Footer = () => {
  return (
    <div className='footer'>
          <div className="footer-icons">
              <img src={facebook_icon} alt="" className="" />
              <img src={instagram_icon} alt="" className="" />
              <img src={twitter_icon} alt="" className="" />
              <img src={youtube_icon} alt="" className="" />
          </div>
    </div>
  )
}

export default Footer