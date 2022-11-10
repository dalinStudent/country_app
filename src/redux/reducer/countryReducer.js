import { FETCH_COUNTRIES_REQUEST } from '../../type'

const initialState = {
    countries: [],
    countriesInFavoriteAmount: 0,
    countriesInFavorite: [],
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COUNTRIES_REQUEST:
        return {
          ...state,
          countries: action.payload,
        }
  
      default:
        return state
    }
  }
  
  export default countryReducer;