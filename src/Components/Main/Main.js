import React from 'react';
import Weather from './WeatherInformation';
import CommunityBlog from "./CommunityBlog";
import Events from './Events';
import Scores from "./Scores";
import Blog from "./Blog";
import PhotoGallery from './PhotoGallery';
import Search from './Search';


const Main = () => {
  const blogText = ``
  return (
  <div className="MainSection">
    <Weather />
    <CommunityBlog />

    <div className="Blog">
          <Blog text={blogText}/>
    <Scores />
    <Events />
    <PhotoGallery />
    
    <Search />
    
   
    </div>
  

  </div>
);
};

export default Main;
