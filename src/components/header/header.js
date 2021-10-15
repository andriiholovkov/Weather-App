import React, { useRef, useEffect } from 'react';
import './header.scss';
import getWeatherData from '../weather/api-service';
import { useDispatch } from 'react-redux';

const Header = () => {
  const refInput = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    initMapScript()
      .then(() => initAutocomplete())
  })

  const initMapScript = () => {
    if(window.google) {
      return Promise.resolve()
    }
  }

  const initAutocomplete = () => {
    if(!refInput.current) return
    const autocomplete = new window.google.maps.places.Autocomplete(refInput.current);
    autocomplete.setFields(['address_component', 'geometry']);
    autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete))
  }

  const onChangeAddress = (autocomplete) => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lon = autocomplete.getPlace().geometry.location.lng();
    
    const address = {
      lat: lat,
      lon: lon,
    }

    dispatch(getWeatherData(lat, lon))
    return address
  };

  return (
    <header className='header'>
      <div className='wrapper'>
        <input
          ref={refInput} 
          className='header__inpt' 
          type="text"
          placeholder='Search City...' 
        />
      </div>
    </header>
  );
};

export default Header;