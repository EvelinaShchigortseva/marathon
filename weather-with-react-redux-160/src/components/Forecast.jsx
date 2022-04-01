import React from "react";
import {correctDate} from "../helpers";
import {useSelector} from "react-redux";

const Forecast = () => {
    function getUrlImg(icon) {
        return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    const informationForecast = useSelector(state => state.weatherInformationForecast.weatherInformationForecast)
    return (
        <div className="wrapper">
            <div className="city_text">{informationForecast.name}</div>
            <div className="weather_forecast_column">
                {informationForecast.list.map((city) => (
                    <div className="weather_forecast_item">
                        <div className="weather-forecast-item-date">
                            <div className="item-date-day">
                                {new Date(city.dt_txt)
                                    .toDateString()
                                    .split(" ")
                                    .reverse()
                                    .slice(1, 3)
                                    .join(" ")}
                            </div>
                            <div className="item-date-time">{correctDate(city.dt_txt)}</div>
                        </div>
                        <div className="weather-forecast-item-temp">
                            <div className="item-temp-info">
                                <div>Temperature {parseInt(city.main.temp)}</div>
                                <div>Feel like {parseInt(city.main.feels_like)}</div>
                            </div>
                            <div className="item-temp-weather">
                                <div className="item-weather">{city.weather[0].main}</div>
                                <img
                                    src={getUrlImg(city.weather[0].icon)}
                                    className="item-weather-img"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
