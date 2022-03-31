import React from "react";
import FavoriteCities from "./FavoriteCities";
import InformationWeather from "./InformationWeather";

const Information = ({information, informationForecast}) => {

    return (
        <div className="information">
            <InformationWeather
                weatherInformation={information}
                informationForecast={informationForecast}/>
            <FavoriteCities/>
        </div>
    );
};

export default Information;
