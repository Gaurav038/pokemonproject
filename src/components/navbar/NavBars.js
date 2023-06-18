import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import "./NavBars.css"
import SearchBar from '../Navsearch/SearchBar';
import BookmarkIcon from '@mui/icons-material/Bookmark';


function NavBars() {


  return (
    <header>
        <div className='navbar' >
            <div className='logo' >
                <Link to="/">Gallery</Link>
            </div>
            <div className='action-btn' >
                <SearchBar />
            </div>
            <ul className='links' >
                <Link to="/bookmark">
                    <div className='toggle-box'>
                        <div>Bookmark</div>
                        <div> <BookmarkIcon /> </div>
                    </div>
                </Link>
            </ul>
            <div className='toggle-btn' >
                <Link to="/bookmark">
                    <div className='toggle-box'>
                        <div>Bookmark</div>
                    </div>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default NavBars