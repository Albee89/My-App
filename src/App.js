import React from 'react';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Welcome from "./Components/Main/Welcome/Welcome";
import About from "./Components/Main/About";
import Footer from "./Components/Footer/Footer";
import Events from './Components/Main/Events/Events';
import Scores from "./Components/Main/Scores/Scores";
import PhotoGallery from './Components/Main/PhotoGallery';
import Main from './Components/Main/Main';


function App () {
  return (
 <div className="App">
    <Navigation />
    <Welcome />
    <Header />
    <div className="main">
    <Events />
    <Scores />
    <Main />
    <PhotoGallery />
    </div>
    <About />
    <Footer />

    </div>
  );
    
};

export default App;
