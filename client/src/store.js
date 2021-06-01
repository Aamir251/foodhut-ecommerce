import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { productsReducer, productReducer, cartReducer } from "./reducers/reducers.js";

const rootReducer = combineReducers({
    productsList : productsReducer,
    singleProduct : productReducer,
    cart : cartReducer
})


const initialCartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const initialState = {
    cart : initialCartItems
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;
