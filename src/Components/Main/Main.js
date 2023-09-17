import React from 'react';
import WeatherInformation from './Weather/WeatherInformation';
import ContactUs from './ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CommunityBlog from './CommunityBlog/CommunityBlog';
import Blog from './CommunityBlog/Blog';



const Main = () => {
  const blogText = `hello world here's a song that we're singing`
  return (
  <div className="MainSection">         
    
    
    <Header />

    <CommunityBlog />
    <div className="Blog">
          <Blog text={blogText}/>
          </div>
          
  <WeatherInformation />
    <ContactUs />
    <Footer />

    
    <div>
    </div>
  

  </div>
);
};

export default Main;
