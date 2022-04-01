import {createStore, combineReducers, applyMiddleware} from 'redux'
import {currentCityReducer} from "./currentCityRedicer";
import {composeWithDevTools} from "redux-devtools-extension";
import {favoriteCitiesReducer} from "./favoriteCitiesReducer";
import thunk from "redux-thunk";
import {weatherInformationReducer} from "./weatherInformationReducer";
import {weatherInformationForecastReducer} from "./weatherInformationForecastReducer";



const rootReducer = combineReducers({
    currentCity: currentCityReducer,
    favoriteCities: favoriteCitiesReducer,
    weatherInformation: weatherInformationReducer,
    weatherInformationForecast: weatherInformationForecastReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))