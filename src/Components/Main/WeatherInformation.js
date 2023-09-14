import React from 'react';
import Weatherstyles from "./weather.module.css";


const WeatherInformation = () => {
    return (
        <div className="WeatherInformation">
        <div className={Weatherstyles.grow}>
        <h2>Local Weather</h2>
        </div>
        </div>
    );
}

export default WeatherInformation;