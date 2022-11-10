import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import createRootReducer from './reducer'

const initState = {
    country: {
        countries: [],
        countriesInFavoriteAmount: 0,
        countriesInFavorite: [],
    },
};

function makeStore(initialState) {
    if (initialState === void 0) { initialState = initState; }
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, thunk];
    const composeEnhancers = compose;
    if (process.env.NODE_ENV === 'development') {
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    }
    const store = createStore(createRootReducer(), initialState, composeEnhancers(applyMiddleware.apply(void 0, middlewares)));
    if (module.hot) {
        ;
        module.hot.accept('./reducer', function () {
            var nextReducer = require('./reducer').default;
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
export default makeStore;
