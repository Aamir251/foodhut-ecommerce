import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { productsReducer, productReducer, cartReducer, shippingAddressReducer, savePaymentMethodReducer } from "./reducers/reducers.js";
import { userDetailsReducer, userReducer, userRegisterReducer, userUpdateProfileReducer } from "./reducers/userReducers.js";



const rootReducer = combineReducers({
    productsList : productsReducer,
    singleProduct : productReducer,
    cart : cartReducer,
    userLogin : userReducer,
    userRegister : userRegisterReducer,
    userDetails : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    shippingAddress : shippingAddressReducer,
    paymentMethod : savePaymentMethodReducer
})


const initialCartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
const initialUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialShippingAddress = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};

const initialPaymentMethod = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : {}

const initialState = {
    cart : initialCartItems,
    userLogin : {userInfo : initialUserInfo},
    shippingAddress : initialShippingAddress,
    paymentMethod : initialPaymentMethod
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;
