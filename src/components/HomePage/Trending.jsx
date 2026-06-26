import { useEffect, useRef, useState } from "react";
import dayjs from 'dayjs';
import axios from "axios";
import "./Trending.css";

function Trending() {
 
    const [today, setToday] = useState(true);
    const [movies, setMovies] = useState([]);
    const btnRef1 = useRef();
    const btnRef2 = useRef();
    const hightlightRef = useRef();
    const imgUrl = import.meta.env.VITE_API_IMG_BASE_URL;

    useEffect(()=>{
    
      const BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const API_KEY = import.meta.env.VITE_API_KEY;
      const ENDPOINT = 'discover/movie';

      async function getMovies(){

        const response = await axios.get(`${BASE_URL}/${ENDPOINT}`,
          {
            params:{
              api_key: API_KEY,
              include_adult: false,
              include_video: false,
              language: "en-US",
              page: 1,
              sort_by: "popularity.desc",
              with_origin_country: "US",
            }
          });
        const DATA = response.data.results;

        setMovies(DATA);

      }

      getMovies();
      
      hightlightRef.current.style.width = `${btnRef1.current.offsetWidth}px`;
    },[]);


    function todayTrend(){
        setToday(true);
        hightlightRef.current.style.left = `${btnRef1.current.offsetLeft}px`;
        hightlightRef.current.style.width = `${btnRef1.current.offsetWidth}px`;
    }
    function thisWeekTrend(){
        setToday(false);
        hightlightRef.current.style.left = `${btnRef2.current.offsetLeft}px`;
        hightlightRef.current.style.width = `${btnRef2.current.offsetWidth}px`;
    }

 
    return (
    <>
      <div className="trending-container">
        <div className="trending-options">
          <div className="heading">Trending</div>
          <div className="trend-toggle-wrapper">
            <div className="btn" ref={hightlightRef}></div>
            <button className={`toggle today ${today? 'active':''}`}
                    onClick={todayTrend}
                    ref={btnRef1}>Today
            </button>
            <button className={`toggle this-week ${today? '':'active'}`}
                    onClick={thisWeekTrend} 
                    ref={btnRef2}>This Week
            </button>
          </div>
        </div>
        <div className="carousel">
            {movies && movies.map((movie)=>{
              
                return <div className="cards" key={movie.id}>
                    <div className="cards-image">
                    <img src={`${imgUrl}/w500/${movie.poster_path}`} alt="" className="c-image" />
                    </div>
                    <div className="movie-title">{movie.title}</div>
                    <div className="release-date">{dayjs(movie.release_date).format("MMM D, YYYY")}</div>
                </div>
            })}
        </div>
      </div>
    </>
  );
}

export default Trending;
