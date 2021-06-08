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

export const logout = () => async(dispatch) => {
    localStorage.removeItem("userInfo")

    dispatch({
        type : ACTIONS.USER_LOGOUT,
    })
}

// User Registration

export const register = (name, email, password) => async(dispatch) => {
    try {
        dispatch({
            type : ACTIONS.USER_REGISTER_REQUEST
        })

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await api.register(name, email, password, config)
        dispatch({
            type : ACTIONS.USER_REGISTER_SUCCESS,
            payload : data
        })

        //To Automatically login the user on registration, we dispatch the login reducer too
        dispatch({
            type : ACTIONS.USER_LOGIN_SUCCESS,
            payload : data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type : ACTIONS.USER_REGISTER_FAIL,
            payload : error.message
        })
    }
}

// Getting user details, we will need the token here 

export const getUserDetails = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type : ACTIONS.USER_DETAILS_REQUEST
        })

        const { userLogin : { userInfo }} = getState()

        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        const { data } = await api.getUserDetails(id, config)
        
        dispatch({
            type : ACTIONS.USER_DETAILS_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : ACTIONS.USER_DETAILS_FAIL,
            payload : error.message
        })
    }
}