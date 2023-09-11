import React, { useState } from "react";


const Navigation = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("welcome");
  const navItems = [
    { id: 1, title: "Welcome", name: "Welcome" },
    { id: 2, title: "Photo Gallery", name: "PhotoGallery" },
    { id: 3, title: "Community Blog", name: "CommunityBlog" },
    { id: 4, title: "Contact Us", name: "ContactUs" }
  ];
  return (
    <div className="Navigation">
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