import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addFavoriteCityAction} from "../store/favoriteCitiesReducer";


const Now = () => {
    const weatherInformation = useSelector(state => state.weatherInformation.weatherInformation)
    const dispatch = useDispatch()
    const iconUrl = `http://openweathermap.org/img/wn/${weatherInformation.weather[0].icon}@2x.png`;
    const favoriteCities = useSelector(state => state.favoriteCities.favoriteCities)
    const addFavoriteCity = (city) => {
        dispatch(addFavoriteCityAction(city))
    }

    const handleClick = () => {
        if (favoriteCities.includes(weatherInformation.name)) {
            return;
        }
        addFavoriteCity(weatherInformation.name);

    };


    return (
        <div className="wrapper">
            <div className="weather_now_temp">
                <span>{parseInt(weatherInformation.main.temp)}°C</span>
            </div>
            <div className="weather_now_img">
                {" "}
                <img src={iconUrl}/>
            </div>
            <div className="weather-now-city">
                <div className="city_text_block">
                    <span className="city_text">{weatherInformation.name}</span>
                </div>
                <button className="city_favorite" onClick={handleClick}>
                    {" "}
                </button>
            </div>
        </div>
    );
};

export default Now;
