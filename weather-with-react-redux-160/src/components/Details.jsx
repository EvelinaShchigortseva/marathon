import React from "react";
import {correctDate} from "../helpers";

const Details = ({weatherInformation}) => {
    return (
        <div className="wrapper">
            <div className="city_text">{weatherInformation.name}</div>
            <div className="details-column">
                <div className="details-column-block">
                    Temperature:{" "}
                    <span className="temp">
                        {parseInt(weatherInformation.main.temp)}°C
                    </span>
                </div>
                <div className="details-column-block">
                    Feels like:{" "}
                    <span className="feels">
                        {parseInt(weatherInformation.main.feels_like)}°C
                    </span>
                </div>
                <div className="details-column-block">
                    Weather:{" "}
                    <span className="weather">{weatherInformation.weather[0].main}</span>
                </div>
                <div className="details-column-block">
                    Sunrise:{" "}
                    <span className="sunrise">
                        {correctDate(weatherInformation.sys.sunrise)}
                    </span>
                </div>
                <div className="details-column-block">
                    Sunset:{" "}
                    <span className="sunset">
                        {correctDate(weatherInformation.sys.sunset)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Details;
