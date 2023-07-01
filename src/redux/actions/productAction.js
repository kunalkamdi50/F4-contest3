import * as action from "./actionTypes"
import axios from "axios"

export const fetchProductRequest = () => {
    return(
        {
            type: action.FETCH_PRODUCT_REQUEST
        }
    )
}

export const fetchProductSuccess = (products) => {
    return(
        {
            type: action.FETCH_PRODUCT_SUCCESS,
            payload: products
        }
    )
}

export const fetchProductFailure = (error) => {
    return(
        {
            type: action.FETCH_PRODUCT_FAILURE,
            payload: error
        }
    )
}

export const fetchProducts = () => {
    return (dispatch) => {
         dispatch(fetchProductRequest())
         axios.get("https://dummyjson.com/products")
         .then(response => dispatch(fetchProductSuccess(response.data.products)))
            .catch(error => dispatch(fetchProductFailure(error)))
    }
}