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