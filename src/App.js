import React from 'react';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Welcome from "./Components/Welcome/Welcome";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";



function App () {
  return (
 <div className="App">
 <styles />
  <Navigation />
  <Header />  
  <Welcome />
  <div>
  <About />
  </div>
    <div className="main">
    <Main />
    </div>  
    <Footer />
    

    </div>
   
  );
    
};

export default App;

