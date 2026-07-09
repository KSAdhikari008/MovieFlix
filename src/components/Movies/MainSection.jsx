import { useContext, useEffect, useState } from "react";
import styles from "./MainSection.module.css";
import axios from "axios";
import dayjs from "dayjs";
import { WatchlistContext } from "../../contexts/WatchlistContext";
import Watchlist from "../Watchlist/Watchlist";
import { IoAdd } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";


const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const IMAGE_URL_PATH = import.meta.env.VITE_API_IMG_BASE_URL;
const ENDPOINT = 'discover/movie';

function MainSection() {

  const [Movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const {watchlist, setWatchlist} = useContext(WatchlistContext);

  useEffect(() => {
    async function getTopRatedMovies() {
      const response = await axios.get(`${BASE_URL}/${ENDPOINT}`, {
        params: {
          api_key: API_KEY,
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: 1,
          sort_by: "vote_average.desc",
          "vote_count.gte": 5000,
          with_origin_country: "US",
        },
      });

      const DATA = response.data.results;

      setMovies(DATA);
      setLoading(false);
    }

    getTopRatedMovies();
  }, []);


  function addToWatchlist(movie){
    // Toggle movie presence in the watchlist
    setWatchlist((prevWatchlist) => {
      const movieAlreadyInWatchlist = prevWatchlist.some((item) => item.id === movie.id);
      if (movieAlreadyInWatchlist) {
        // Remove the movie if it is already in the watchlist
        return prevWatchlist.filter((item) => item.id !== movie.id);
      } else {
        // Add the movie if it is not yet in the watchlist
        return [...prevWatchlist, movie];
      }
    });
  }

  return (
    <div className={styles.main}>
      <h1 className={styles['page-title']}>Top Rated Movies</h1>
      <div className={styles['movies-container']}>
        {loading
          ? "loading"
          : Movies.map((m) => {

            const isAdded = watchlist.some(wm => wm.id === m.id);
            
            return (
              <div className={styles["movie-card"]} key={m.id}>
                <button className={`${styles.addToWatchlist} ${isAdded ? styles.added : ''}`} 
                        onClick={()=>{addToWatchlist(m)}}>
                        {isAdded ? <IoMdCheckmark/> : <IoAdd/>}
                </button>
                <div className={styles.poster}>
                  <img
                    src={`${IMAGE_URL_PATH}/w500/${m.poster_path}`}
                    alt=""
                    className={styles["poster-image"]}
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.title}>{m.title}</div>
                  <div className={styles.releaseDate}>{dayjs(m.release_date).format("MMM D, YYYY")}</div>
                </div>
              </div>
            )})}
      </div>
    </div>
  );
}

export default MainSection;
