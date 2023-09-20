import React, { useState } from "react";
import withLogger from './withLogger';
import WrappedComponent from './Counter.js';




export default function SportsClubs() {
  const [searchInput, setSearchInput] = useState("");
  
  

let clubs =
[

  {
    "name": "Kapfenberger",
    "code": "KBG",
    "location": "Buderim"
  },
  {
    "name": "Salzburg RFC",
    "code": "SR",
    "location": "Brisbane"
  },
  {
    "name": "Noosa Tigers",
    "code": "NTFC",
    "location": "Noosa"
  },
  {
    "name": "LongJohn Silvers",
    "code": "LJS",
    "location": "Nambour"
  },
  {
    "name": "Kawana Pythons",
    "code": "KP",
    "location": "Kawana"
  },

  {

    "name": "Sadie Storms",
    "code": "SS",
    "location": "Cooroy"
  },

  {
    "name": "St Margarets Mooloolaba",
    "code": "SMM",
    "location": "Mooloolaba"
  }
];

      
      const handleChange = (e) => {
         e.preventDefault();
         setSearchInput(e.target.value);
      };
      function Search() {
         
         // filter countries according to search values
         let filteredClubs = clubs.filter((club) => {
            return club.name.match(searchInput.toLowerCase());
         });
         
         // create table rows
         const filtered = filteredClubs?.map((club) => (
            <tr>
               <td> {club.name}</td>
               <td> {club.code} </td>
               <td> {club.location} </td>
            </tr>
         ));
         return <div> {filtered} </div>;
      }
      return (
         <div>
            <h2>
               {" "}
               Search our sister clubs!
            </h2>
            <input
               Type="search"
               placeholder="Search here"
               onChange={handleChange}
               value={searchInput}
            />
            <table style={{ tableLayout: "fixed", width: "11rem" }}>
            <WrappedComponent />
               <tr>
                  <th> Club Name </th>
                  <th> Club Code </th>
                  <th> Club Location </th>
               </tr>
               {Search(withLogger)}
               
             
               
               
            </table>
         </div>
      );
   }
  