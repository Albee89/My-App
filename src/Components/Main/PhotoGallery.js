import React from "react";

import Photostyles from "./photo.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const PhotoGallery = () => {

  return (
    <div className = {Photostyles.grow}>
      <h2>Photo Gallery</h2>
      <div className="Photos">
      <Carousel>
        <div>
          <img src="src/images.soccer-game" alt="PhotoGallery"/>
          
        </div>
        <div>
          <img src="src/images/dummy.png" alt="PhotoGallery"/>
          
        </div>
        <div>
          <img src="src/images/dummy.png" alt="PhotoGallery"/>
          
        </div>
      </Carousel>
    </div>
    </div>
 
  );
}
 
export default PhotoGallery;