import React from "react";
import Tabs from "./Tabs";
import Now from "./Now";
import {useState} from "react";
import Details from "./Details";
import Forecast from "./Forecast";

const InformationWeather = ({weatherInformation, addCity, informationForecast,}) => {
    const [currentPage, setCurrentPage] = useState("");

    let current;

    if (currentPage === "") current = <div> Введите название города </div>;
    else if (currentPage === "Now")
        current = (
            <Now weatherInformation={weatherInformation} addFavoriteCity={addCity}/>
        );
    else if (currentPage === "Forecast")
        current = <Forecast informationForecast={informationForecast}/>;
    else current = <Details weatherInformation={weatherInformation}/>;

    return (
        <div className="information-weather">
            <div className="weather-block">{current}</div>
            <Tabs setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default InformationWeather;
