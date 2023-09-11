import PhotoAlbum from "react-photo-album";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const PhotoGallery = () => {

  return (
  
    <div className="PhotoGallery" id="PhotoGallery">
      <h3>PhotoGallery</h3>
      <Carousel>
        <div>
          <img src="src/images/dummy.png"/>
          <p className="legend">Photo 1</p>
        </div>
        <div>
          <img src="src/images/dummy.png" />
          <p className="legend">Photo 2</p>
        </div>
        <div>
          <img src="src/images/dummy.png" />
          <p className="legend">Photo 3</p>
        </div>
      </Carousel>
    </div>
    
  );
}
 
export default PhotoGallery;