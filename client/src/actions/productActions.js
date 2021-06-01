import * as api from "../api";
import ACTIONS from "../actionTypes/actionTypes" ;

// ACTION CREATORS 
export const getProducts = () => async(dispatch) => {
    try {

        dispatch({ type : ACTIONS.GET_PRODUCTS_REQUEST })
        const { data } = await  api.getProducts()
        
        dispatch({
            type : ACTIONS.GET_PRODUCTS_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : ACTIONS.GET_PRODUCTS_FAIL,
            payload : error.message
        })
    }
}

export const getProduct = (id) => async(dispatch) => {
    try {

        dispatch({ type : ACTIONS.GET_PRODUCT_REQUEST })
        const { data } = await  api.getProduct(id)
        
        dispatch({
            type : ACTIONS.GET_PRODUCT_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : ACTIONS.GET_PRODUCT_FAIL,
            payload : error.message
        })
    }
}
