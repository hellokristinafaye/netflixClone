// necessary for using React
import React, { useEffect, useState } from 'react'
// styling for this page
import './Home.css'
// components that I coded 
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
// assets. provided by Great Stack
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import { Link } from 'react-router-dom'

// so this is a function that returns JSX.  And then we export the function to the App file, which then displays code depending on which route is used in the URL 
const Home = (index) => {

    const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWM2YWJhY2RmNjcwNGRmYzFkNDNkNGIzYzc4MTc2ZiIsIm5iZiI6MTczMTkwMTU1Ni41MzIsInN1YiI6IjY3M2FiODc0Zjc0MWViMDQyOGI2MWYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b-7ZA4uWx7YMTs_SUCTU3RMLAqY2DHCffSBNWLf-54g",
    },
  };



   
    useEffect(() => {
         fetch(
           "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
           options
         )
           .then((res) => res.json())
           .then((res) => setApiData(res.results[3]))
           .catch((err) => console.error(err));
 
    },[])
    


  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p className="">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
        

            <Link
              to={`/player/${apiData.id}`}
              className="card"
              key={index}
            >
              <button className="btn">
                <img src={play_icon} alt="" className="" />
                Play
              </button>
            </Link>

            <button className="btn dark-btn">
              <img src={info_icon} alt="" className="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home