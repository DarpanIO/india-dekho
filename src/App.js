import logo from './logo.svg';
import React, {useState} from 'react';
import Nav from './components/nav.jsx'
import './App.css';
import Home from './components/home';
import Museum from './components/cultureComponent/museum/museum';
import MuseumArticle from './components/cultureComponent/museum/MuseumArticle';
import MuseumArticleContent from './components/cultureComponent/museum/museumArticleContent';
import Slider from './components/Slider/Slider';
import { BrowserRouter, Routes, Route, Navigate,useLocation} from "react-router-dom";
// import {Redirect} from "react-router"
function App() {
  const location = useLocation();
  const path = location.pathname;
  const [display, setDisplay] = useState( path == "/home" ? true : false);
  return (
    <div >
     <Nav />
    {/* {display && <Slider />} */}
     <div className="bodybg">
    <div className="body-container">
      <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/culture/museum" element={<Museum />} />
          {/* <Route exact path="/culture/museum/:id" element={<MuseumArticle />} /> */}
          <Route exact path="/culture/museum/:id" element={<MuseumArticleContent />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
    </div>
    </div>
  );
}

export default App;
