import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title, category}) => {
  
    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWM2YWJhY2RmNjcwNGRmYzFkNDNkNGIzYzc4MTc2ZiIsIm5iZiI6MTczMTkwMjAxNC4zMTE1MjE4LCJzdWIiOiI2NzNhYjg3NGY3NDFlYjA0MjhiNjFmMjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HnikSMVXmScqffVt079FGhXMCtxyhFvRnyoFuvby7xg'
  }
};



    const handleWheel = (event) => {
     event.preventDefault();
     cardsRef.current.scrollLeft += event.deltaY;
}

    useEffect(() => {
    // the wheel stuff seems depricated, but I do want this useEffect
        // cardsRef.current.addEventListener('wheel', handleWheel)
        
        fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
         .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => setApiData(response.results))
            .catch(err => console.error(err));
        
}, [])

  
    return (
    <div className='title-cards'>
          <h2 className="">{title?title:"Popular on Netflix"}</h2>
          <div className="card-list" ref={cardsRef}>
              {apiData.map((card, index) => {
                  return <div className="card" key={index}>
                      <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" className="" />
                      <p className="">{card.original_title}</p>
                  </div>
              })}
          </div>
    </div>
  )
}

export default TitleCards