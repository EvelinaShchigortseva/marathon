import {getWeatherInformationForecast} from "../../requestWeather";
import {getWeatherInformationForecastAction} from "../weatherInformationForecastReducer";



export const requestWeatherInformationForecast = (city) => {
    return async function(dispatch) {
        const cityInfo = await getWeatherInformationForecast(city);
        dispatch(getWeatherInformationForecastAction(cityInfo))
    }
}