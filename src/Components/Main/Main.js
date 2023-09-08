import React from "react";
import Welcome from "./Welcome";
import Weather from "./WeatherInformation";
import CommunityBlog from "/Communityblog";
import Blog from "./Blog";
import ContactUs from "./ContactUs";

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
    <ContactUs />
  </div>
);
};

export default Main;
