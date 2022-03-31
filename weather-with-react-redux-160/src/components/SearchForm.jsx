import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCityAction} from "../store/currentCityRedicer";

const SearchForm = ({value, saveCity}) => {
    const [cityName, setCityName] = useState("");


    const city = useSelector(state => state.currentCity.cityName)
    const dispatch = useDispatch()


    const addCurrentCity = (city) => {
        dispatch(getCurrentCityAction(city))
    }

    const handleChange = (e) => {
        setCityName(e.target.value);

    };

    const handleSubmit = (e) => {

        if (cityName) {
            addCurrentCity(cityName)
            console.log(city)
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
