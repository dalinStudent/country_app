import { FETCH_COUNTRIES_REQUEST } from "../../type";

var fetchCountriesRequest = function (countries) {
    return {
        type: FETCH_COUNTRIES_REQUEST,
        payload: countries,
    };
};
const _fetchCountriesRequest = fetchCountriesRequest;
export { _fetchCountriesRequest as fetchCountriesRequest };

var fetchCountries = function () {
        return function (dispatch) {
        fetch('https://restcountries.com/v3.1/all')
            .then(function (res) { 
                return res.json(); 
            })
            .then(function (data) {
            var countries = data;
            dispatch((0, _fetchCountriesRequest)(countries));
        });
    };
};
const _fetchCountries = fetchCountries;
export { _fetchCountries as fetchCountries };