import React from 'react';
import "./App.css";
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
  <Navigation>
  <Routes>
      <Route path="#PhotoGallery" element={<PhotoGallery />}/>
      <Route path="#CommunityBlog" element={<CommunityBlog/>}/>
      <Route path="#ContactUs" element={<ContactUs/>}/>
      <Route path="#Scores" element={<Scores />}/>
      <Route path="#Events" element={<Events />} />
      <Route path="#About" element={<About/>} />
  </Routes> 
  </Navigation>

  <Header />  
  <Welcome />
 
    <div className="main">
    <Main />
    </div>  
    <ContactUs />
    <About />
    <Footer />
    </div>

  )
};

export default App;
