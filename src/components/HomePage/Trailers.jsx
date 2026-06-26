import { Fragment,useEffect, useRef, useState } from 'react';
import './Trailers.css'

function Trailers() {
 
  const [trailers, setTrailers] = useState();
  const [trailerKey, setTrailerKey] = useState('');
  const [trailerToggle, setTrailerToggle] = useState([1,0,0,0]);
  const [overlay, setOverlay] = useState(false);
  const hightlightRef = useRef();
  const btnRef1 = useRef();
  const btnRef2 = useRef();
  const btnRef3 = useRef();
  const btnRef4 = useRef();
  const overlayRef = useRef(null);


  useEffect(()=>{
    hightlightRef.current.style.width = `${btnRef1.current.offsetWidth}px`;

    const handleEscape = (e)=>{
      
      if(e.key === 'Escape') setOverlay(false);
    }
    document.addEventListener('keydown',handleEscape);
   
    
    return ()=>{
      document.removeEventListener('keydown',handleEscape);
    }

  },[overlay]);

  

  useEffect(()=>{
  
    const URL = `${import.meta.env.VITE_API_URL}`;
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=47dee29f80f751643eab4ed3a5dd9999&language=en-US')
    .then(res => res.json())
    .then(data => {
      setTrailers(data.results);
    })

  });

  

  function popular(){
    setTrailerToggle([1,0,0,0]);
    hightlightRef.current.style.width = `${btnRef1.current.offsetWidth}px`;
    hightlightRef.current.style.left = `${btnRef1.current.offsetLeft}px`;

  }
  function streaming(){
    setTrailerToggle([0,1,0,0]);
    hightlightRef.current.style.width = `${btnRef2.current.offsetWidth}px`;
    hightlightRef.current.style.left = `${btnRef2.current.offsetLeft}px`;
  }
  function onTV(){
    setTrailerToggle([0,0,1,0]);
    hightlightRef.current.style.width = `${btnRef3.current.offsetWidth}px`;
    hightlightRef.current.style.left = `${btnRef3.current.offsetLeft}px`;
  }
  function inTheaters(){
    setTrailerToggle([0,0,0,1]);
    hightlightRef.current.style.width = `${btnRef4.current.offsetWidth}px`;
    hightlightRef.current.style.left = `${btnRef4.current.offsetLeft}px`;
  }

  function showTrailer(id){
  
    // Open the overlay immediately so the user gets instant feedback
    // instead of waiting for the network request to finish.
    setOverlay(true);
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=47dee29f80f751643eab4ed3a5dd9999`)
    .then(res => res.json())
    .then(data => {
      const vid = data.results.find(obj=> obj.site === 'YouTube' && obj.type === 'Trailer');
      // Some movies don't have a trailer, so guard against undefined.
      if(vid){
        setTrailerKey(`https://www.youtube.com/embed/${vid.key}`);
      }
    })
    

  }
 
  return (
    <>
        <div className="parent-container">
          <div className="trailer-options">
          <div className="heading">Trailers</div>
          <div className="trailer-toggle-wrapper">
            <div className="highlighter" ref={hightlightRef}></div>
            <button className={`popular ${trailerToggle[0]? 'active':''}`}
                    onClick={popular}
                    ref={btnRef1}>Popular
            </button>
            <button className={`streaming ${trailerToggle[1]? 'active':''}`}
                    onClick={streaming} 
                    ref={btnRef2}>Streaming
            </button>
            <button className={`on-tv ${trailerToggle[2]? 'active':''}`}
                    onClick={onTV} 
                    ref={btnRef3}>On TV
            </button>
            <button className={`in-theaters ${trailerToggle[3]? 'active':''}`}
                    onClick={inTheaters} 
                    ref={btnRef4}>In Theaters
            </button>
            
          </div>
        </div>
          <div className="trailer-carousel">
              { trailers && trailers.map((movie)=>{
                return (
                  <div className="trailer-card" key={movie.id}>
                    <div className="trailer-thumbnail" onClick={()=>{showTrailer(movie.id)}}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt=""
                        className="trailer-image"
                      />
                      <button>▶</button>
                    </div>
                    <div className="trailer-details">
                      <h3>{movie.title}</h3>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                );
              }) }
          </div>
        </div>
        {overlay && <div className="video-overlay" ref={overlayRef} onClick={()=>{setOverlay(false);setTrailerKey('')}}>
          <div className="video" onClick={(e)=>{e.stopPropagation()}}>
            <iframe src={trailerKey} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <button onClick={()=>{setOverlay(false)}}>X</button>
          </div>
        </div>}
    </>
  );
}

export default Trailers;