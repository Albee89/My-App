import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Welcome from "./Components/Welcome/Welcome";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import ContactUs from './Components/ContactUs/ContactUs';
import PhotoGallery from './Components/Main/PhotoGallery';
import CommunityBlog from './Components/Main/CommunityBlog';
import Scores from './Components/Main/Scores';
import Events from './Components/Main/Events';

function App () {
  return (

 <div className="App">
  <Navigation />
  <Routes>
      <Route path="/Main/PhotoGallery" element={<PhotoGallery />}/>
      <Route path="/Main/CommunityBlog" element={<CommunityBlog/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/Main/Scores" element={<Scores />}/>
      <Route path="/Main/Events" element={<Events />} />
      <Route path="/About" element={<About/>} />
  </Routes>
  <Header />  
  <Welcome />
  <About />
    <div className="main">
    <Main />
    </div>  
    <ContactUs />
    <Footer />
    </div>

  )
};

export default App;
