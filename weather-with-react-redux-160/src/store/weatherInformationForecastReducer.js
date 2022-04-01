const defaultValue = {
    weatherInformationForecast: {}
}
const getWeatherInformationForecast = 'getRequest'

export const weatherInformationForecastReducer = (state = defaultValue, action) => {
    switch (action.type){
        case getWeatherInformationForecast :
            return {...state, weatherInformationForecast: {...state.weatherInformationForecast, ...action.payload}}
        default:
            return state
    }
}

export const getWeatherInformationForecastAction = (payload) => (
    {type: getWeatherInformationForecast, payload})