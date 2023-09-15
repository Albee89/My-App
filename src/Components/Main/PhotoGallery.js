import React, { Component } from "react";
import EnhancedComponent from "./Search.js";

const photogalleryList = [
    {
      "title": "Photo 1",
      "location": "Location 1",
      "photo": ""
    },
    {
      "title": "Photo 2",
      "location": "Location 2",
      "photo": ""
    }
  ]
 
  
  export class PhotoGallery extends Component {
    render() {
      const {searchTerm} = this.props;
      return (
        <div>
          <div>
            <h3>PhotoGallery</h3>
          </div>
          <div>
          {photogalleryList
            .filter(photogalleryItem => `${photogalleryItem.title} ${photogalleryItem.location} ${photogalleryItem.photo}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
            .map(photogalleryItem => <photogalleryCard key={photogalleryItem.id} {...photogalleryItem} />)}
          </div>
        </div>
      );
    }
  }
  
  export default EnhancedComponent(PhotoGallery);