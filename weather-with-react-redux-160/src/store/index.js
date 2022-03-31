import {createStore, combineReducers} from 'redux'
import {currentCityReducer} from "./currentCityRedicer";
import {composeWithDevTools} from "redux-devtools-extension";
import {favoriteCitiesReducer} from "./favoriteCitiesReducer";

const rootReducer = combineReducers({
    currentCity: currentCityReducer,
    favoriteCities: favoriteCitiesReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())