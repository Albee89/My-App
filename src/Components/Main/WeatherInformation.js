import React from 'react';
import ReactWeather, { useOpenWeather } from "react-open-weather";
import Weatherstyles from "./weather.module.css";


const WeatherInformation = () => {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'API key', //Put your API Key between the quotes
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
    <div className={Weatherstyles.grow}>
      <h2>Weather Information</h2>
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
    />
      </div>
  );

}

export default WeatherInformation;
  
