import React from 'react';
import WeatherInformation from './WeatherInformation';
import CommunityBlog from "./CommunityBlog";
import Events from './Events';
import Scores from "./Scores";
import Blog from "./Blog";
import PhotoGallery from './PhotoGallery';
import Search from './Search';
import News from './News';



const Main = () => {
  const blogText = ``
  return (
  <div className="MainSection">
    <CommunityBlog />
    <div className="Blog">
          <Blog text={blogText}/>
          <News />
    <Events />
    <WeatherInformation />
    <PhotoGallery />

    <Scores />

    <Search />
    
   
    </div>
  

  </div>
);
};

export default Main;
