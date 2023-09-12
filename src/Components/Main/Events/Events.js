  import React from 'react';
  import Eventstyles from "./events.module.css";
  
  
  let games = [
    { date: "Saturday 1st", time: "7:00pm", game: "ALL-DAY PREMIERE: Sunshine Jets vs Leo Suns" },
    { date: "Friday 6th", time: "5:00pm", game: "Sunshine Jets vs Carseldine Corvettes" },
    { date: "Saturday 8th", time: "6:00pm", game: "ALL-DAY PREMIERE: Sunshine Jets vs DaVincis" },
    { date: "Friday 14th", time: "5:00pm", game: "Sunshine Jets vs Ashgrove Turbos" },
    { date: "Saturday 15th", time: "7:00pm", game: "Sunshine Jets vs Leo Suns" },
    { date: "Sunday 16th", time: "4:00pm", game: "Sunshine Jets vs North Gympie" },

  ];

  function Events() {
    return (
      <div className="EventsTable">
        <table className={Eventstyles.table}>
        <h2>Events</h2>
          <tr>
          <div className ={Eventstyles.tbody}>
          
            <th>Date</th>
            <th>Time</th>
            <th>Game</th>
            </div>
          </tr>

          {games.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.date}</td>
                <td>{val.time}</td>
                <td>{val.game}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }


export default Events;


