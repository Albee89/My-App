import Carousel from "./Carousel";
import React from "react";



const images =
  [
    "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvY2NlciUyMGdhbWV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2NlciUyMGdhbWV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1532306486637-1d593e9e0415?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jY2VyJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29jY2VyJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1494177310973-4841f7d5a882?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvY2NlciUyMGdhbWV8ZW58MHx8MHx8fDA%3D"
  ];

const alt = [
  "Amazing shot after Sunday's game, c. Md Madhi",
  "Juniors after practice on Saturday morning, c. FancyCrave",
  "Women's grand final win, c. Jeffrey F Lin",
  "Training, c. Abigail Keenan",
  "After dark at the club. c. David Clarke"

];


const index = ["Historical 25th Anniverary game- tickets on sale now!"


];
function News() {
  return (
    <div className="News">
      <div id="News"></div>
      <h2>Photo Gallery</h2>
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

      <Carousel images={images}
        alt={alt} />

    </div>
  )
}

export default News;
