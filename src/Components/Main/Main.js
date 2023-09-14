import React from 'react';
import Weather from "./WeatherInformation";
import CommunityBlog from "./CommunityBlog";
import Blog from "./Blog";

const Main = () => {
  const blogText = ``
  return (
  <div className="MainSection">

    <Weather />
    <CommunityBlog />
   
      <div className="Blog">
          <Blog text={blogText}/>
    </div>
  

  </div>
);
};

export default Main;
