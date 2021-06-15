import ACTIONS from "../actionTypes/actionTypes";


export const orderCreateReducer = (state ={}, action) => {
    switch (action.type) {
        case ACTIONS.ORDER_CREATE_REQUEST :
            return { loading : true }

        case ACTIONS.ORDER_CREATE_SUCCESS : 
            return { loading : false, success : true, order : action.payload }

        case ACTIONS.ORDER_CREATE_FAIL : 
            return { loading : false, error : action.payload }
        default:
            return state;
    }
}


export const orderDetailsReducer = (state = { loading : true, orderItems : [], shippingAddress : {} }, action ) => {

    switch (action.type) {
        case ACTIONS.ORDER_DETAILS_REQUEST :
            return { ...state, loading : true }

        case ACTIONS.ORDER_DETAILS_SUCCESS : 
            return { loading : false, order : action.payload }

        case ACTIONS.ORDER_DETAILS_FAIL : 
            return { loading : false, error : action.payload }
        default:
            return state;
    }

}


export const orderPayReducer = (state = {}, action ) => {

    switch (action.type) {
        case ACTIONS.ORDER_PAY_REQUEST :
            return { loading : true }

        case ACTIONS.ORDER_PAY_SUCCESS : 
            return { loading : false, success : true }

        case ACTIONS.ORDER_PAY_FAIL : 
            return { loading : false, error : action.payload }

        case ACTIONS.ORDER_PAY_RESET : 
            return {}
        default:
            return state;
    }

}


export const myOrderListReducer = (state = { orders : [] }, action ) => {

    switch (action.type) {
        case ACTIONS.MY_ORDERLIST_REQUEST :
            return { loading : true }

        case ACTIONS.MY_ORDERLIST_SUCCESS : 
            return { loading : false, orders : action.payload }

        case ACTIONS.MY_ORDERLIST_FAIL : 
            return { loading : false, error : action.payload }
        default:
            return state;
    }

}
