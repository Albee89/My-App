import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Weatherstyles from "./weather.module.css";

const WeatherInformation = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'ef572e62024121dfaba6b28ca69eae3f',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <div className={Weatherstyles.WeatherInformation}>
    <h2>Local Weather</h2>
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
    </div>
  );
};

export default WeatherInformation;