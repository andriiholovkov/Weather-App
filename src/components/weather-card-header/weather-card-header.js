import React from 'react';
import { useSelector } from 'react-redux';
import './weather-card-header.scss';

const WeatherCardHeader = ({isToDay, setIsToDay, daysOfWeek, monthsOfYear}) => {
  const temp = useSelector(state => state.temp);
  const fullDate = useSelector(state => state.fullDate);
  const zona = useSelector(state => state.timezone);
  const index = zona.indexOf("/");
  const city = (zona.slice(index + 1)).split('_').join(' ');
  const monthOfYear = monthsOfYear[new Date(fullDate).getMonth() + 1];
  const dayOfWeek = daysOfWeek[new Date(fullDate).getDay()];
  const dateOfDay = new Date(fullDate).getDate();
  const year = new Date(fullDate).getFullYear();

  return (
    <>
      <div className="weatherCard__header">
        <div className='weatherCard__title-wrap'>
          <span>{dayOfWeek}, {dateOfDay} {monthOfYear} {year}</span>
          <div>{city}, {Math.round(temp)}&deg;C</div>
        </div>
        <div className='weatherCard__btn-wrap'>
          <button
            onClick={() => setIsToDay(true)}
            className={`primary ${isToDay ? 'active' : ''}`}
            >
              Today
          </button>
          <button
            onClick={() => setIsToDay(false)}
            className={`primary ${isToDay ? '' : 'active'}`}
            >
              Weekly
          </button>
        </div>
      </div>
    </>
  );
};

export default WeatherCardHeader;