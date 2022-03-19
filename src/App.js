import logo from './logo.svg';
import Nav from './components/nav.jsx'
import './App.css';
import Home from './components/home';
// import Museum from './components/cultureComponent/museum';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div >
     <Nav />
     <div className="bodybg">
    <div className="body-container">
    <Home />

    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/museum" element={<Museum />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route>
      </Routes>
    </BrowserRouter> */}
    </div>
    </div>
    </div>
  );
}

export default App;
