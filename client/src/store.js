import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { productsReducer, productReducer, cartReducer } from "./reducers/reducers.js";
import { userReducer, userRegisterReducer } from "./reducers/userReducers.js";



const rootReducer = combineReducers({
    productsList : productsReducer,
    singleProduct : productReducer,
    cart : cartReducer,
    userLogin : userReducer,
    userRegister : userRegisterReducer
})


const initialCartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
const initialUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    cart : initialCartItems,
    userLogin : {userInfo : initialUserInfo}
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;
