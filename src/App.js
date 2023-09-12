import React from 'react';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Welcome from "./Components/Main/Welcome/Welcome";
import Main from "./Components/Main/Main";
import Aside from "./Components/Main/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import Events from './Components/Main/Events/Events';
import Scores from "./Components/Main/Scores/Scores";


function App() {
  return (
    <div className="App">
  

    <Navigation />
    <Welcome />
    <Header />
    <div className="main">
    <Main />
    <Aside />
    <Events />
    <Scores />
    </div>
    <Footer />
    </div>
    
);
}


export default App;



      