import {getWeatherInformation} from "../../requestWeather";
import {getWeatherInformationAction} from "../weatherInformationReducer";

export const requestWeatherInformation = (city) => {
  return async function(dispatch) {
      const cityInfo = await getWeatherInformation(city);
      dispatch(getWeatherInformationAction(cityInfo))
  }
}