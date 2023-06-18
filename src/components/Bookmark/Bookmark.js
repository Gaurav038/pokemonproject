import React, { useContext } from 'react'
import './Bookmark.css'
import { BookmarkContext } from '../../context/bookmark'


function Bookmark() {

    const {
        allData,addData
      } =  useContext(BookmarkContext)

      console.log(allData);
  return (
    <div className="bookmark">
    <ul className="bookmark-list">
    <h1>Bookmarks</h1>
      {allData && allData.map((bookmark) => (
        <li key={bookmark.title} className="bookmark-item">
            <img src={bookmark.img} target="_blank" rel="noopener noreferrer" />
            <h2>{bookmark.title}</h2>
          <button
            className="remove-button"
            onClick={() => addData(bookmark.title)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Bookmark