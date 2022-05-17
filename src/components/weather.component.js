import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './weather.styles.scss';

const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '***REMOVED***',
    lat: '32.775729', 
    lon: '-117.19389',
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
  });
  
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      unitsLabels={{ temperature: 'F', windSpeed: 'mph' }}
      showForecast={true}
    />
  );
};

export default Weather;