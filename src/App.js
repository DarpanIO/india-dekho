import logo from './logo.svg';
import Nav from './components/nav.jsx'
import './App.css';
import Home from './components/home';
import Museum from './components/cultureComponent/museum';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
function App() {
  return (
    <div >
     <Nav />
     <div className="bodybg">
    <div className="body-container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/museum" element={<Museum />} />
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
