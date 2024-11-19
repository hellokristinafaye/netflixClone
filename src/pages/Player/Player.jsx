import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        published_at: '',
        type: '',
    })

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWM2YWJhY2RmNjcwNGRmYzFkNDNkNGIzYzc4MTc2ZiIsIm5iZiI6MTczMTkwMjAxNC4zMTE1MjE4LCJzdWIiOiI2NzNhYjg3NGY3NDFlYjA0MjhiNjFmMjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HnikSMVXmScqffVt079FGhXMCtxyhFvRnyoFuvby7xg'
  }
};

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/912649/videos?language=en-US', options)
    .then(res => res.json())
     .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
    
     }, [])    

  return (
      <div className='player'>
          <img src={back_arrow_icon} alt="" className="" />
          <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} className="" title='trailer' frameBorder='0' allowFullScreen ></iframe>
          <div className="player-info">
              <p className="">{apiData.published_at.slice(0,10)}</p>
              <p className="">{apiData.name} </p>
              <p className="">{apiData.type} </p>
          </div>
    </div>
  )
}

export default Player