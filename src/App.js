import React from 'react';
import "./App.css";
import PhotoGallery from './Components/PhotoGallery';
import Feed from './Components/Instagram/Feed';
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import Scores from './Components/Scores/Scores';
import News from './Components/News/News';
import Events from './Components/Events/Events';

function App () {
  return (

 <div className="App">
  <Navigation /> 
    <PhotoGallery />
    <Feed 
      userName="bainsworld"
      className="Feed"
      classNameLoading="Loading"
      limit="8"
      />
      <News/>
    <Scores />
    <Events />

    <div className="main">
    <Main />
    </div>  
    </div>

  )
};

export default App;
