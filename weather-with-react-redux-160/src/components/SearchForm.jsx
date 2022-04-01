import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getCurrentCityAction} from "../store/currentCityRedicer";
import {requestWeatherInformation} from "../store/asyncAction/weatherInformation";
import {requestWeatherInformationForecast} from "../store/asyncAction/weatherInformationForecast";

const SearchForm = () => {
    const [cityName, setCityName] = useState("");
    const dispatch = useDispatch()

    const addCurrentCity = (city) => {
        dispatch(getCurrentCityAction(city))
        getWeatherInformation(city)

    }

    const getWeatherInformation = (city) => {
        dispatch(requestWeatherInformation(city))
        dispatch(requestWeatherInformationForecast(city))
    }

    const handleChange = (e) => {
        setCityName(e.target.value);

    };

    const handleSubmit = (e) => {

        if (cityName) {
            addCurrentCity(cityName)
        }
        e.preventDefault();

    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="form-input"
                placeholder="Введите название города"
                onChange={handleChange}
            />

            <input className="form-button" type="submit"/>
        </form>
    );
};

export default SearchForm;
