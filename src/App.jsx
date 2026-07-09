import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MoviesPage from "./components/Movies/MoviesPage";
import TvShowsPage from "./components/TvShows/TvShowsPage";
import PeoplesPage from "./components/People/PeoplesPage";
import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";
import AccountPage from "./components/Account/AccountPage";
import Watchlist from "./components/Watchlist/Watchlist";
import NotFound from "./NotFound";
import { ThemeContext } from "./contexts/ThemeContext";
import { useEffect, useState } from "react";
import { WatchlistContext } from "./contexts/WatchlistContext";

function App() {

  const [theme, setTheme] = useState('light');
  // lazy initializer, initializer function ,runs only once, when the component first mounts.
  const [watchlist, setWatchlist] = useState(()=>{
    return JSON.parse(localStorage.getItem('MovieFlix-watchlist') || "[]"); 
    /* JSON.parse() expects its first argument to be a string. If you pass something else, JavaScript automatically converts it to a string.
     JSON.parse([]) -> JSON.parse("") . Behind the scene String([]) -> "".
      An empty string is not valid JSON, so the parser reaches the end of the input immediately and throws:
      Unexpected end of JSON input */
  });
  /* useState(JSON.parse(localStorage.getItem("MovieFlix-watchlist") || "[]"));
   Runs on every render (JSON.parse() , (a js function call) is evaluated every time) */


  useEffect(()=>{
    // Toggles css variables(in :root and .dark) for light/dark mode.
    document.body.className = theme;
  },[theme]);
 
  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
    <WatchlistContext.Provider value={{watchlist, setWatchlist}}>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/watchlist" element={<Watchlist/>} />
        <Route path="/tv-shows" element={<TvShowsPage/>} />
        <Route path="/people" element={<PeoplesPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </WatchlistContext.Provider>
    </ThemeContext.Provider>
    </>
  );
}

export default App;