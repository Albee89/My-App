import React from "react";

import Photostyles from "./photo.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const PhotoGallery = () => {

  return (
    <div className = {Photostyles.grow}>
      <h2>Photo Gallery</h2>
      <Carousel>
        <div>
          <img src="src/images/dummy.png" alt="PhotoGallery"/>
          <p className="legend">Photo 1</p>
        </div>
        <div>
          <img src="src/images/dummy.png" alt="PhotoGallery"/>
          <p className="legend">Photo 2</p>
        </div>
        <div>
          <img src="src/images/dummy.png" alt="PhotoGallery"/>
          <p className="legend">Photo 3</p>
        </div>
      </Carousel>
    </div>
 
  );
}
 
export default PhotoGallery;