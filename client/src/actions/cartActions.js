import * as api from "../api";
import ACTIONS from "../actionTypes/actionTypes"

export const addToCart = (id, qty) => async(dispatch, getState) => {

    try {
        const { data } = await api.addToCart(id)

        dispatch({
            type : ACTIONS.CART_ADD_ITEM,
            payload : {
                product : data._id,
                name : data.name,
                image : data.image,
                price : data.price,
                countInStock : data.countInStock,
                qty
            }
        })

        localStorage.setItem("cart", JSON.stringify(getState().cart))

    } catch (error) {
        dispatch({payload : error.response && error.response.data.message ? error.response.data.message : error.message})

    }
}

export const removeFromCart = (id) => async(dispatch, getState) => {
    
    dispatch({
        type : ACTIONS.CART_REMOVE_ITEM,
        payload : id 
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart));

}


export const saveShippingAddress = (data) => (dispatch) => {
    
    dispatch({
        type : ACTIONS.CART_SAVE_SHIPPING_ADDRESS,
        payload : data
    })

    localStorage.setItem("shippingAddress", JSON.stringify(data));

}

export const savePaymentMethod = (payment) => (dispatch) => {

    dispatch({
        type : ACTIONS.CART_SAVE_PAYMENT_METHOD,
        payload : payment
    });

    localStorage.setItem("paymentMethod", JSON.stringify(payment))
}