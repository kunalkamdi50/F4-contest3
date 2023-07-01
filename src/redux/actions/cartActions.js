import * as actionTypes from "./actionTypes";

export const addToCart = (product) => {
    return(
        {
            type: actionTypes.ADD_TO_CART,
            payload: product
        }
    )
}

export const removeFromCart = (product_id) => {
    return(
        {
            type: actionTypes.REMOVE_FROM_CART,
            payload: product_id
        }
    )
}

export const resetCart  = () => {
    return(
        {
            type: actionTypes.RESET_CART,
            
        }
    )
}

export const checkout = () => {
    return(
        {
            type: actionTypes.CHECKOUT,
        }
    )
}