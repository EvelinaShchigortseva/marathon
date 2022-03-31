const defaultValue = {
    favoriteCities: []
}

const addFavoriteCity = 'addFavoriteCity'
const deleteFavoriteCity = 'deleteFavoriteCity'

export const favoriteCitiesReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case addFavoriteCity:
            return {...state, favoriteCities: [...state.favoriteCities, action.payload]}
        case deleteFavoriteCity:
            return {...state, favoriteCities: state.favoriteCities.filter(city => city !== action.payload)}
        default:
            return state
    }
}

export const addFavoriteCityAction = (payload) => (
    {type: addFavoriteCity, payload}
)

export const deleteFavoriteCityAction = (payload) => (
    {type: deleteFavoriteCity, payload}
)