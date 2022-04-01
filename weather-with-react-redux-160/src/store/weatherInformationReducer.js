const defaultValue = {
    weatherInformation: {}
}
const getWeatherInformation = 'getRequest'

export const weatherInformationReducer = (state = defaultValue, action) => {
    switch (action.type){
        case getWeatherInformation :
            return {...state, weatherInformation: {...state.weatherInformation, ...action.payload}}
        default:
            return state
    }
}

export const getWeatherInformationAction = (payload) => (
    {type: getWeatherInformation, payload})