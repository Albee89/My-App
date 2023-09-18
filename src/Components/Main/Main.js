import React from 'react';
import ContactUs from './ContactUs/ContactUs';
import CommunityBlog from './CommunityBlog/CommunityBlog';
import Blog from './CommunityBlog/Blog';
import Welcome from './Welcome/Welcome';
import News from './News/News';
import Scores from './Scores/Scores';
import Events from './Events/Events';
import PhotoGallery from './PhotoGallery';
import Videos from './Videos';


const blogText = ``

const Main = () => {
   return (
  <div className="MainSection">         
    <Welcome />
    <News/>
    <Scores />
    <Events />
    <Videos />
   
          
          <PhotoGallery />
      
 
  <ContactUs />
   

    <div className="Blog">
    <CommunityBlog />
      <Blog text={blogText}/>
          </div>
    
    <div>
    </div>
  

  </div>
);
};

export default Main;
