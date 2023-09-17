import React from 'react';
import WeatherInformation from './Weather/WeatherInformation';
import ContactUs from './ContactUs/ContactUs';
import CommunityBlog from './CommunityBlog/CommunityBlog';
import Blog from './CommunityBlog/Blog';
import Welcome from './Welcome/Welcome';
import News from './News/News';
import Scores from './Scores/Scores';
import Events from './Events/Events';
import PhotoGallery from './PhotoGallery';
import Search from './Search';
import Videos from './Videos';

const blogText = ``

const Main = () => {
   return (
  <div className="MainSection">         
    <Welcome />
    <News/>
    <Scores />
    <Events />
 
    <div className="Blog">
    <CommunityBlog />
      <Blog text={blogText}/>
          </div>
          <Videos />
          <PhotoGallery />
      
 
  <ContactUs />
    <Search />
<WeatherInformation />
    
    <div>
    </div>
  

  </div>
);
};

export default Main;
