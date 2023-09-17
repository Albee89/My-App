import React from 'react';
import WeatherInformation from './Weather/WeatherInformation';
import ContactUs from './ContactUs/ContactUs';
import CommunityBlog from './CommunityBlog/CommunityBlog';
import Blog from './CommunityBlog/Blog';
import Welcome from './Welcome/Welcome';
import News from './News/News';
import Scores from './Scores/Scores';
import Events from './Events/Events';


const Main = () => {
  const blogText = `hello world here's a song that we're singing`
  return (
  <div className="MainSection">         
    <Welcome />
    <News/>
    <CommunityBlog />
    <Scores />
    <Events />
    <div className="Blog">
          <Blog text={blogText}/>
          </div>
          
  <WeatherInformation />
  <ContactUs />
    

    
    <div>
    </div>
  

  </div>
);
};

export default Main;
