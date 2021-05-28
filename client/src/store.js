import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { productsReducer, productReducer } from "./reducers/reducers.js";

const rootReducer = combineReducers({
    products : productsReducer,
    product : productReducer
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store;
