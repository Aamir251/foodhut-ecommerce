import * as api from "../api";
import ACTIONS from "../actionTypes/actionTypes" ;

// ACTION CREATORS 
export const getProducts = () => async(dispatch) => {
    try {

        dispatch({ action = ACTIONS.GET_PRODUCTS_REQUEST })
        const { data } = await  api.getProducts()
        
        dispatch({
            action : ACTIONS.GET_PRODUCTS_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            action : ACTIONS.GET_PRODUCTS_FAIL,
            payload : error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getProduct = () => async(dispatch) => {
    try {

        dispatch({ action = ACTIONS.GET_PRODUCT_REQUEST })
        const { data } = await  api.getProduct()
        
        dispatch({
            action : ACTIONS.GET_PRODUCT_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            action : ACTIONS.GET_PRODUCT_FAIL,
            payload : error.response.data.message ? error.response.data.message : error.message
        })
    }
}