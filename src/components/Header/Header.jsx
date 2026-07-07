import './Header.css'
import Logo from './../../assets/tmdb.svg?react'
import {  NavLink, useNavigate } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

// add code for when user types in the search input field, then show the cross icon and when user clicks on the cross icon, then clear the input field and hide the cross icon
// do home page after this.

function Header() {

   const {theme, setTheme} = useContext(ThemeContext);
   console.log(theme);
 
  const navigate = useNavigate();

 let hasInput = false;
  // hasInput = true;

  return (
    <>
      <nav className="header">
        <div className="left-section">
          <NavLink to='/movies' className="nav-items" >Movies</NavLink>
          <NavLink to='/tv-shows' className="nav-items">TV Shows</NavLink>
          <NavLink to='/people' className="nav-items">People</NavLink>
          <NavLink to='/awards' className="nav-items">Awards</NavLink>
        </div>
        <div className="middle-section">
          <Logo className='logo' onClick={() => {navigate('/');}}/>
        </div>
        <div className="right-section">
          <div className="input-field">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256" className='search-icon'><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
            <input type="text" className='input' placeholder="Search..." />
            {  hasInput && <RxCross1 className='cross-icon'/>}
          </div>
          <button onClick={()=>{setTheme(prev => prev == 'light' ? 'dark' : 'light')}}
                  className='dark-light-mode' >{theme==='light'? '☼' : '⏾'}
          </button>
          <NavLink to='/about' className="nav-items">About</NavLink>
          <NavLink to='/contact' className="nav-items">Contact</NavLink>
          <NavLink to='/account' className="nav-items">Profile</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;