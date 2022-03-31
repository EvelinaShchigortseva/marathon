import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCityAction} from "../store/currentCityRedicer";
import {deleteFavoriteCityAction} from "../store/favoriteCitiesReducer";

const FavoriteCities = () => {
    const dispatch = useDispatch()
    const favoriteCities = useSelector(state => state.favoriteCities.favoriteCities)

    const handleClick = (e) => {
        addCurrentCity(e.target.innerText)
    };

    const addCurrentCity = (city) => {
        dispatch(getCurrentCityAction(city))
    }

    const deleteCity = (city) => {
        dispatch(deleteFavoriteCityAction(city))
    }

    return (
        <div className="favorite-cities">
            <div className="favorite-cities-heading">Added Locations:</div>
            <div className="favorite-cities-list">
                {favoriteCities.map((city) => (
                    <div className="list-item">
                        <div onClick={handleClick} key={city}>
                            {city}
                        </div>
                        <input
                            className="button_x"
                            onClick={() => deleteCity(city)}
                            type="button"
                            value=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoriteCities;
