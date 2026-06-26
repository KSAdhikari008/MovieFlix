// do webdevsimplified react vid, then react , and then resume this project.
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

function App() {
 
 
  return (
    <>
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
    </>
  );
}

export default App;