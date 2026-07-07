import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MoviesPage from "./components/Movies/MoviesPage";
import TvShowsPage from "./components/TvShows/TvShowsPage";
import PeoplesPage from "./components/People/PeoplesPage";
import AwardsPage from "./components/Awards/AwardsPage";
import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";
import AccountPage from "./components/Account/AccountPage";
import NotFound from "./NotFound";
import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";

function App() {

  const [theme, setTheme] = useState('light');

  useEffect(()=>{
    // Toggles css variables(in :root and .dark) for light/dark mode.
    document.body.className = theme;
    console.log(document.body.className)
  
  },[theme]);
 
  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/tv-shows" element={<TvShowsPage/>} />
        <Route path="/people" element={<PeoplesPage/>} />
        <Route path="/awards" element={<AwardsPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeContext.Provider>
    </>
  );
}

export default App;