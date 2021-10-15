import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherCardHeader from '../weather-card-header';
import WeatherWeekly from '../weather-weekly';
import getWeatherData from './api-service';
import WeatherToDay from '../weather-today';
import './weather.scss';

const Weather = () => {
  const dispatch = useDispatch();
  const lat = useSelector(state => state.lat);
  const lon = useSelector(state => state.lon);
  const [isToDay, setIsToDay] = useState(true);
  const isLoading = useSelector(state => state.isLoading);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    dispatch(getWeatherData(lat, lon))
  }, [dispatch]);

  return (
    <div>
      <div className="wrapper">
        <div className="weatherCard">
          <div className="weatherCard__info">
            {isLoading 
              ? 'Loading...' 
              : <WeatherCardHeader isToDay={isToDay} setIsToDay={setIsToDay} daysOfWeek={daysOfWeek} monthsOfYear={monthsOfYear}/>}
            {isToDay ? <WeatherToDay /> : <WeatherWeekly daysOfWeek={daysOfWeek} monthsOfYear={monthsOfYear}/>}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Weather;