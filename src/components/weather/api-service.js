import {
  getWeatherDataSuccess,
  getWeatherDataRequest,
  getWeatherDataFailure,
} from './action-creators.js';

 const getWeatherData = (lat, lon) => {
  const apiKeyWeather = 'abcebf672c23ff728f444d2c77b4ee96';
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${apiKeyWeather}`;

  return function(dispatch) {
      fetch(url)
        .then(dispatch(getWeatherDataRequest()))
        .then((response) => response.json())
        .then((json) => dispatch(getWeatherDataSuccess(json)))
    }
  };

export default getWeatherData;
