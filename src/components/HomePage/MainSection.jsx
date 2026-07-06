import { useEffect, useState } from 'react';
import './MainSection.css';
import Trailers from './Trailers';
import Trending from './Trending';
import axios from 'axios';

function Main() {
 
const [bannerURL, setBannerURL] = useState(null);
const [loading, setLoading] = useState(true);

  useEffect(()=>{
  
    const API_KEY = import.meta.env.VITE_API_KEY;
    const IMG_URL = import.meta.env.VITE_API_IMG_BASE_URL;

    const getHeroBanner = async ()=>{
      // New trending movies for hero section.
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`);
      const data = response.data.results;
      const movie = data[Math.floor(Math.random()*10)];//picking random movie from first 10 movies.
      const url = `${IMG_URL}/original${movie.backdrop_path}`;
      setBannerURL(url);
      setLoading(false);
    }
  
    getHeroBanner();

  },[]);

  if(loading){
    return <main className="main">
            <div className="hero-section" style={loading && {backgroundColor:'#d0e4f1'}}>
              <h1>Welcome to TMDB</h1>
              <p>Millions of movies, TV shows and people to discover.Explore our extensive database , read reviews and stay up to date with the latest realeases.</p>
            </div>
            <Trending/>
            <Trailers/>
        </main>
  }else{
  
  return (
    <>
        <main className="main">
            <div className="hero-section" style={bannerURL && {backgroundImage: `url(${bannerURL})`}}>
                <h1>Welcome to TMDB</h1>
                <p>Millions of movies, TV shows and people to discover.Explore our extensive database , read reviews and stay up to date with the latest realeases.</p>
            </div>
            <Trending/>
            <Trailers/>
        </main>
    </>
  );
}
}

export default Main;