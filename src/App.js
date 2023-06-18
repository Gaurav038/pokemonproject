import "./App.css"
import NavBars from './components/navbar/NavBars'
import Gallery from './components/gallery/Gallery'
import {Routes, Route } from "react-router-dom";
import Model from './components/gallery/Model'
import Bookmark from './components/Bookmark/Bookmark'


function App() {

        
    return (
        <div className='app'>

            {/*--------------- NavBar section----------------- */}
            <NavBars />

             {/*--------------- Result section----------------- */}
             <Routes>
                <Route path="/" element={<Gallery />} />
                <Route path="/pokemon/:pokemon" element={<Model />} />
                <Route path="/bookmark" element={<Bookmark />} />
             </Routes>
            
        </div>
    )
}

export default App
