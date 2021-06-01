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
            return { loading : false, error : action.payload }
            
        default:
            return product;
    }
}

export const cartReducer = (cartItems = [], action) => {

    switch (action.type) {
        case ACTIONS.CART_ADD_ITEM:
            const item = action.payload

            // here product refers to the id of an individual product

            const existItem = cartItems.find(x => x.product === item.product)

            if (existItem) {
                return cartItems.map(x => x.product === existItem.product ? item : x)
            } else {
                return [...cartItems, item]
            }
            break;
        case ACTIONS.CART_REMOVE_ITEM :
            // here payload will be the id
            return cartItems.filter(x => x.product !== action.payload)
        default:
            return cartItems;
    }

}