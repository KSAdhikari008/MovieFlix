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
  const [watchlist, setWatchlist] = useState(()=>{
    return JSON.parse(localStorage.getItem('MovieFlix-watchlist') || []);
  });

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