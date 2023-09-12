import React, { useState } from "react";
import Navstyles from "./nav.module.css";


const Navigation = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Welcome");
  const navItems = [
    { id: 1, title: "Photo Gallery", name: "PhotoGallery" },
    { id: 2, title: "Community Blog", name: "CommunityBlog" },
    { id: 3, title: "Contact Us", name: "ContactUs" },
    { id: 4, title: "Recent Scores", name: "Scores"},
    { id: 5, title: "About", name:"About"},
    { id: 6, title: "Events", name:"Events"},

  ];

  return (
    <div className="Navigation">
    <div className={Navstyles.header}>
    </div>
      <ul className="NavigationMenus">
        {navItems.map((item) => {
          return (
            <li key={item.id}
              onClick={() => setSelectedNavItem(item.name)}
              className={selectedNavItem === item.name ? `activeNavItem` : ""}>
              <a href={`#${item.name}`}>{item.title}</a>


            </li>
          );
        })}
        </ul>
    
        </div>
  );
      };

      export default Navigation;