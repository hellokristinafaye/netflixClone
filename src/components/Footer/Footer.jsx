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
          <ul className="">
              <li className="">Audio Description</li>
              <li className="">Help Center</li>
              <li className="">Gift Cards</li>
              <li className="">Media Center</li>
              <li className="">Investor Relations</li>
              <li className="">Jobs</li>
              <li className="">Terms of Use</li>
              <li className="">Privacy</li>
              <li className="">Legal Notices</li>
              <li className="">Cookie Preferences</li>
              <li className="">Corporate Information</li>
              <li className="">Contact Us</li>
          </ul>
          <p className="copyright-text">© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer