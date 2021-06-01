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
        console.log(error);
    }
}

export const removeFromCart = (id) => async(dispatch, getState) => {
    
    dispatch({
        type : ACTIONS.CART_REMOVE_ITEM,
        payload : id 
    })

    localStorage.setItem("cart", JSON.stringify(getState().cart));

}