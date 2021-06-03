import * as api from "../api"
import ACTIONS from "../actionTypes/actionTypes";

// Make a login attempt and get back a token
export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type : ACTIONS.USER_LOGIN_REQUEST
        })

        // This config file is for sending data such that we want to tell the headers about the content type
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await api.login(email, password, config)
        dispatch({
            type : ACTIONS.USER_LOGIN_SUCCESS,
            payload : data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type : ACTIONS.USER_LOGIN_FAIL,
            payload : error.message
        })
    }
}