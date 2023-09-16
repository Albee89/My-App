  import React from 'react';
  import Eventstyles from "./events.module.css";
  

  let games = [
    { date: "Saturday 1st", time: "7:00pm", game:  "Sunshine Jets vs Leo Suns" },
    { date: "Friday 6th", time: "5:00pm", game:  "Sunshine Jets vs Cara Corvettes" },
    { date: "Saturday 8th", time: "6:00pm", game:  "Sunshine Jets vs DaVincis" },
    { date: "Friday 14th", time: "5:00pm", game:  "Sunshine Jets vs Ashgrove Turbos" },
    { date: "Saturday 15th", time: "7:00pm", game: "Sunshine Jets vs Leo Suns" },
    { date: "Sunday 16th", time: "4:00pm", game:  "Sunshine Jets vs North Gympie" },

  ];
  
function Events() {
    return (
      <div className="EventsTable">
       <h2>Events Calendar</h2>
       <table className={Eventstyles.contain}>
  
       <div className={Eventstyles.grow}>
       
          <th>Date</th>
          <th>Time</th>
          <th>Game</th>
          
         

          {games.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.date}</td>
                <td>{val.time}</td>
                <td>{val.game}</td>
              </tr>
            )
          })}
          </div>
        </table>
        </div>
      
    );
  }


export default Events;


