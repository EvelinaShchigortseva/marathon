//store
const defaultValue = {
    cityName: ''
}

const getCurrentCity = 'getCity'
//reducer
export const currentCityReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case getCurrentCity :
            return {...state, cityName: action.payload};
        default:
            return state;
    }
}


export const getCurrentCityAction = (payload) =>
    ({type: getCurrentCity, payload})