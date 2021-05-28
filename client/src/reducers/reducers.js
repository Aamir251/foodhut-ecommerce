import ACTIONS from "../actionTypes/actionTypes";

export const productsReducer = (products = [], action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCTS_REQUEST:
            return { loading : true, products : [] }
        
        case ACTIONS.GET_PRODUCTS_SUCCESS:
            return { loading : false, products : action.payload }

        case ACTIONS.GET_PRODUCTS_FAIL : 
            return { loading : false, error : action.payload }
        
        default:
            return products ;
    }
}

export const productReducer = (product = {}, action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCT_REQUEST:
            return { loading : true, product : {} }
        
        case ACTIONS.GET_PRODUCT_SUCCESS: 
            return { loading : false, product : action.payload }
        
        case ACTIONS.GET_PRODUCT_FAIL:
            return { loading : false, product : action.payload }
            
        default:
            return product;
    }
}
