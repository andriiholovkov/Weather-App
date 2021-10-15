const initialState = {
  days: [],
  lat: 48.450001,
  lon: 34.983334,
  timezone: '',
  isLoading: false,
};

const weatherReducer = (state = initialState, {type, data, error}) => {
  switch(type) {
    case 'GET_WEATHER_DATA_REQUEST': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'GET_WEATHER_DATA_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        apiData: data,
        dataDailyArr: data.daily,
        timezone: data.timezone,
        fullDate: data.current.dt,
        clouds: data.current.clouds,
        humidity: data.current.humidity,
        pressure: data.current.pressure,
        wind_speed: data.current.wind_speed,
        temp: data.current.temp,
        lat: data.lat,
        lon: data.lon,
      }
    }

    case 'GET_WEATHER_DATA_FAILURE': {
      return {
        ...state,
        isLoading: false,
        error
      }
    }

    default: return state
  }
}

export default weatherReducer;