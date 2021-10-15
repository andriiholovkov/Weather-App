import {
  GET_WEATHER_DATA_REQUEST,
  GET_WEATHER_DATA_FAILURE,
  GET_WEATHER_DATA_SUCCESS
} from './action-types';

export const getWeatherDataRequest = () => {
  return {
    type: GET_WEATHER_DATA_REQUEST
  }
};

export const getWeatherDataSuccess = (data) => {
  return {
    type: GET_WEATHER_DATA_SUCCESS,
    data,
  }
};

export const getWeatherDataFailure = (error) => {
  return {
    type: GET_WEATHER_DATA_FAILURE,
    error,
  }
};