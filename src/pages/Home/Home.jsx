// necessary for using React
import React, { useEffect, useState } from "react";
// styling for this page
import "./Home.css";
// components that I coded
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
// assets. provided by Great Stack, except for the Sinners Banner
import SinnersBanner from "../../assets/SinnersBanner.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import { Link } from "react-router-dom";

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
      .then((res) => setApiData(res.results[5]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={SinnersBanner} alt="" className="banner-img" />
        <div className="hero-caption">
          <h1 className="hero-title">SINNERS</h1>
          <p className="">
            Trying to leave their troubled lives behind, twin brothers return to
            their hometown to start again, only to discover that an even greater
            evil is waiting to welcome them back.
          </p>
          <div className="hero-btns">
            <Link to={`/player/1233413`} className="card" key={index}>
              <button className="btn">
                <img src={play_icon} alt="" className="" />
                Play
              </button>
            </Link>

            <Link to={`/player/1233413`} className="card" key={index}>
              <button className="btn dark-btn">
                <img src={info_icon} alt="" className="" />
                More Info
              </button>
            </Link>
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
};

export default Home;
