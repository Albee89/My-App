    import React from 'react';
    import ReactWeather, { useOpenWeather } from "react-open-weather";
    
    const WeatherInformation = () => {
    
      const { data, isLoading, errorMessage } = useOpenWeather({
        key: '068dc1dd371354d4435fffad663b3870',
        lat: '48.137154',
        lon: '11.576124',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });
      return (
        
        <>
        <div className="WeatherInformation" id="WeatherInformation">
          <h3>Weather Information</h3>
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Munich"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        />
          </div>
          </>
      );
    
    }
    
    export default WeatherInformation;
    