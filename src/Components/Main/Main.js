import React from 'react';
import Welcome from "./Header/Welcome";
import Header from "./Header/Header";
import Weather from "./WeatherInformation";
import CommunityBlog from "./CommunityBlog";
import Blog from "./Blog";



const Main = () => {
  const blogText = `Members Only`;

return (
  <div className="MainSection">
    <Header />  
    <Welcome />
    <Weather />
    <CommunityBlog />
    
      <div className="Blog">
          <Blog text={blogText}/>
    </div>

  </div>
);
};

export default Main;
