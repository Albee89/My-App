// Import necessary React components and styles
import React from 'react';
import "./App.css";
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import TikTok from './Components/Main/TikTok';
import SportsClubs from './Components/SportsClubs/SportsClubs';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Header />

            <div className="main">
                <Main />
            </div>

            <TikTok />
            <SportsClubs />

            <div>
                <About />
            </div>

            <div>
                <div><br /></div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
