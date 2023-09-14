import PhotoAlbum from "react-photo-album";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Picstyle from "./photo.module.css";


const PhotoGallery = () => {

  return (
    <div class="PhotoGallery">
    <div className={Picstyle.grow}>
    <h2>Photo Gallery</h2>
    <div>
    <PhotoAlbum>

      <Carousel>
        <div>
        <p img src="src/Components/images/dummy.png"/>
          <p className="legend">Photo 1</p>
        </div>
        <div>
          <p img src="src/Components/images/dummy.png" />
          <p className="legend">Photo 2</p>
        </div>
        <div>
          <p img src="src/Components/images/dummy.png" />
          <p className="legend">Photo 3</p>
        </div>
      </Carousel>
      
  </PhotoAlbum>

</div>
</div>
</div>

  )
};
 
export default PhotoGallery;