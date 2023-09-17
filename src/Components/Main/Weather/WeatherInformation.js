import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Weatherstyles from "./weather.module.css";


const customStyles = {
	fontFamily:  'Helvetica, sans-serif',
	gradientStart:  '#0181C2',
	gradientMid:  '#04A7F9',
	gradientEnd:  '#4BC4F7',
	locationFontColor:  '#FFF',
	todayTempFontColor:  '#FFF',
	todayDateFontColor:  '#B5DEF4',
	todayRangeFontColor:  '#B5DEF4',
	todayDescFontColor:  '#B5DEF4',
	todayInfoFontColor:  '#B5DEF4',
	todayIconColor:  '#FFF',
	forecastBackgroundColor:  '#FFF',
	forecastSeparatorColor:  '#DDD',
	forecastDateColor:  '#777',
	forecastDescColor:  '#777',
	forecastRangeColor:  '#777',
	forecastIconColor:  '#4BC4F7',
};

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
    <div className='WeatherInformation'></div>
    <div id='Weather Information'></div>
    <h2>Local Weather</h2>

  
    <ReactWeather
     theme={customStyles}
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