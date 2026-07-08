import './HomePage.css'
import Header from "./../Header/Header";
import Main from './MainSection';
import { ThemeContext } from '../../contexts/ThemeContext';


function HomePage() {
 
  return (
    <>
      <Header/>
      <Main/>
    </>
  );
}

export default HomePage;