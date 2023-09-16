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
    
    <News />
    
    <WeatherInformation />

    <CommunityBlog />
    <div className="Blog">
          <Blog text={blogText}/>
          </div>

    <Events />
    
    <PhotoGallery />

    <Scores />

    <Search />
    
    <div>
    </div>
  

  </div>
);
};

export default Main;
