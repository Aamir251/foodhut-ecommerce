import ACTIONS from "../actionTypes/actionTypes";


export const userReducer = (state = {}, action) => {
    switch (action.type) {

        case ACTIONS.USER_LOGIN_REQUEST:
            return { loading : true }
        
        case ACTIONS.USER_LOGIN_SUCCESS: 
            return { loading : false, userInfo : action.payload}
        
        case ACTIONS.USER_LOGIN_FAIL:
            return { loading : false, error : action.payload }
        
        case ACTIONS.USER_LOGOUT : 
            return {}
            
        default:
            return state;
    }

}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {

        case ACTIONS.USER_REGISTER_REQUEST:
            return { loading : true }
        
        case ACTIONS.USER_REGISTER_SUCCESS: 
            return { loading : false, userInfo : action.payload}
        
        case ACTIONS.USER_REGISTER_FAIL:
            return { loading : false, error : action.payload }

        default:
            return state;
    }

}


export const userDetailsReducer = (state = { user : {} }, action) => {
    switch (action.type) {

        case ACTIONS.USER_DETAILS_REQUEST:
            return {...state, loading : true }
        
        case ACTIONS.USER_DETAILS_SUCCESS: 
            return { loading : false, user : action.payload}
        
        case ACTIONS.USER_DETAILS_FAIL:
            return { loading : false, error : action.payload }

        default:
            return state;
    }

}

export const userUpdateProfileReducer = (state = {}, action) => {

    switch (action.type) {

        case ACTIONS.USER_UPDATE_REQUEST:
            return { loading : true }
        
        case ACTIONS.USER_UPDATE_SUCCESS: 
            return { loading : false, success : true, userInfo : action.payload}
        
        case ACTIONS.USER_UPDATE_FAIL:
            return { loading : false, error : action.payload }

        default:
            return state;
    }

}