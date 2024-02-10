import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import kurtSoccer from './images/kurtSoccer.jpg';
import news2 from './images/news2.png';
import womensSoccer from './images/womensSoccer.jpg';

const imageData = [
  {
    
    alt: "soccer player",
    image: kurtSoccer,
  },
 
  {
    
    alt: "Winning Soccer Score",
    image: news2,
  },
  {
    
    alt: "Womens Wins",
    image: womensSoccer,
  },
];

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const renderSlides = imageData.map((image, index) => (
    <div key={index}>
      <img src={image.image} alt={image.alt} />
    </div>
  ));

  return (
    <React.Fragment>
      <div className=" Latest News">
        <div id="#PhotoGallery"></div>
        <h2>Image Gallery</h2>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          selectedItem={currentIndex}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </div>
    </React.Fragment>
  );
}
