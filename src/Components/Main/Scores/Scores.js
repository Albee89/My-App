import React from "react";
import Scorestyles from "./scores.module.css";

let scores = [
  { date: "6/8", team: "SJ vs CC", score: "7:3"  },
  { date: "8/8", team: "SJ vs DI", score: "4:5"  },
  { date: "14/8", team: "SJ vs SC", score: "8:2" },
  { date: "18/8", team: "SJ vs NG", score: "11:7" },
  { date: "24/8", team: "SJ vs AB", score: "11:1" },
];

function Scores() {
return (
  <div name={Scorestyles.table}>
  <h2>Recent Scores</h2>
  <table> 
<tr className={Scorestyles.header}>

  <th>Date</th>
  <th>Teams</th>
  <th>Score</th>
</tr>

{scores.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.date}</td>
                <td>{val.team}</td>
                <td>{val.score}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }
export default Scores;

