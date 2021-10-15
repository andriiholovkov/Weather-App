import React from "react";
import { useSelector } from "react-redux";
import './weather-weekly.scss';
import svg from './weather.svg';

const WeatherWeekly = ({daysOfWeek, monthsOfYear}) => {
  const data = useSelector(state => state.dataDailyArr);
  const temp = useSelector(state => state.temp);
  const fullDate = useSelector(state => state.fullDate);
  const dayOfWeek = daysOfWeek[new Date(fullDate).getDay()];
  const monthOfYear = monthsOfYear[new Date(fullDate).getMonth() + 1];

  return (
    <div className="weatherCard__content-weekly">
        {data.map((day, idx) => {
          if(idx <= 6) {
            return (
              <div className='weather-weekly' key={idx}>
                <div className='weather-weekly__date'>
                  {dayOfWeek}, {monthOfYear}
                </div>
                <img className='weather-weekly__img' src={svg} alt="weather icon" />
                <div className='weather-weekly_temp'>
                  {Math.round(temp)}&deg;C
                </div>
              </div>
            )
          } else {
            return null
          }
        })}
    </div>
  );
};

export default WeatherWeekly;