import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/jeader/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
  <div className="App">
   <Navigation />
   <Header />
   <Main />
   <Aside />
   <Footer />

        </div>
);
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);