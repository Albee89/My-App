import Carousel from "./Carousel";
import React from "react";





const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const headlines= [
  "Barkely at world premiere",
  "CKs come out triumphantly against SJ's",
  "Atticus Finch scores second try in final",
  "Olympe Bain has a head start in season premiere"

 

]

const index = [ "Historical 25th Anniverary game- tickets on sale now!"


];
    function News() {
        return (
          <div className="News">
          <div id="News"></div>
            <h2>Latest News</h2>
            <p
              style={{
                position: "relative",
                margin: "3.5%",
                bottom: 0,
                color: "white",
             

              }}
            >
              {index} 
            </p>
         
              <Carousel images={images} />
             {headlines}
         
      
              
            
        
          </div>
        )
            }
      
    export default News;
