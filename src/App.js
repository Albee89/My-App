import React from 'react';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Main/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import Events from './Components/Main/Events/Events';
import ScoresTable from "./Components/Main/Scores/Scores.js";




function App() {
  return (
    <div className="App">
  

      <Navigation />
    
    <Header />
    <div className="main">
    <Main />
    <Events />
    <Aside />
    <ScoresTable />
    </div>
    <Footer />
    </div>
    
);
}


export default App;



      