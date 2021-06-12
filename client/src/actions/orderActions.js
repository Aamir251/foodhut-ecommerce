import ACTIONS from "../actionTypes/actionTypes"
import * as api from "../api";

export const createOrder = (order) => async(dispatch, getState) => {
    try {
        dispatch({
            type : ACTIONS.ORDER_CREATE_REQUEST
        })

        const { userLogin : { userInfo }} = getState()

        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await api.createOrder(order, config);
        
        dispatch({
            type : ACTIONS.ORDER_CREATE_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : ACTIONS.ORDER_CREATE_FAIL,
            payload : error.message
        })
    }
}


export const getOrderDetails = (orderId) => async(dispatch, getState) => {
    try {
        dispatch({
            type : ACTIONS.ORDER_DETAILS_REQUEST
        })

        const { userLogin : { userInfo }} = getState()

        const config = {
            headers : {
                Authorization : `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await api.getOrderDetails(orderId, config)
        
        dispatch({
            type : ACTIONS.ORDER_DETAILS_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : ACTIONS.ORDER_DETAILS_FAIL,
            payload : error.message
        })
    }
}
