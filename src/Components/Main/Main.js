import React from 'react';
import Weather from "./WeatherInformation";
import CommunityBlog from "./CommunityBlog";
import Events from './Events';
import Scores from "./Scores";
import Blog from "./Blog";
import PhotoGallery from './PhotoGallery';


const Main = () => {
  const blogText = ``
  return (
  <div className="MainSection">
    <Weather />
    <CommunityBlog />
    <Scores />
    <Events />
    <PhotoGallery />
    
   
      <div className="Blog">
          <Blog text={blogText}/>
    </div>
  

  </div>
);
};

export default Main;
