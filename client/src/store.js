import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { productsReducer, productReducer } from "./reducers/reducers.js";

const rootReducer = combineReducers({
    productsList : productsReducer,
    singleProduct : productReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;
