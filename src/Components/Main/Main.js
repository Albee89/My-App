import React from 'react';
import Welcome from "./Welcome";
import Weather from "./WeatherInformation";
import CommunityBlog from "./CommunityBlog";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Scores from './Scores/Scores';
import Events from './Events/Events';
import About from "./About";


const Main = () => {
  const blogText = `Sunshine Jets Official Website`;

return (
  <div className="MainSection">
    <Welcome />
    <Weather />
    <CommunityBlog />
      <div className="Blog">
          <Blog text={blogText}/>
      </div>
    <Scores />
    <Events />
    <About />
    <ContactUs />
  </div>
);
};

export default Main;
