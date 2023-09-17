import React from 'react';
import "./App.css";
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import TikTok from './Components/Main/TikTok';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App () {
  return (
    <div className="App">
 <Navigation />
    <Header />
    <div className="main">
    <Main />
    </div>  
  <TikTok />
  <div>
  <Footer />
    </div>
    </div>
  
  )
};

export default App;
