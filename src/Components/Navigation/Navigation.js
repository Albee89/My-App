import React from "react";
const Navigation = ()=> {

const navItems = ["Welcome", "PhotoGallery", "Weather Information"];
const navList = navItems.map((nav, index) => <li key ={index}>{nav}</li>);
return (
<div>
  <h3>Navigation</h3>
  <ul>{navList}</ul>
  </div>);
};

export default Navigation;