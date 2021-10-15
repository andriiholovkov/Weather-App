import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import './weather-today.scss';

const WeatherToDay = () => {
  const humidity = useSelector(state => state.humidity);
  const pressure = useSelector(state => state.pressure);
  const clouds = useSelector(state => state.clouds);
  const wind_speed = useSelector(state => state.wind_speed);
  console.log('today ->>> render');

  return(
    <div className="weatherCard__content-daily">
      <div className="weatherCard__content-item">
        <span>Humidity</span>
        <span>{humidity}%</span>
      </div>
      <div className="weatherCard__content-item">
        <span>Pressure</span>
        <span>{pressure} mb</span>
      </div>
      <div className="weatherCard__content-item">
        <span>Clouds</span>
        <span>{clouds} %</span>
      </div>
      <div className="weatherCard__content-item">
        <span>Wind</span>
        <span>{wind_speed} km/h</span>
      </div>
    </div>
  );
};

export default WeatherToDay;