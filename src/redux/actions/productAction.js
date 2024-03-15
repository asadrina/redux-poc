import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./actionTypes"
import axios from "axios"

export const fetchProductsRequest = () => {
    return {
        type:FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (users) => {
    return {
        type:FETCH_PRODUCTS_SUCCESS,
        data:users
    }
}

export const fetchProductsFailure = (error) => {
    return {
        type:FETCH_PRODUCTS_FAILURE,
        data:error
    }
}

export const fetchProducts = () => {
    return function(dispatch) {
        dispatch(fetchProductsRequest())
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            const products = response.data
            dispatch(fetchProductsSuccess(products))
        })
        .catch(error => {
            dispatch(fetchProductsFailure(error.message))
        })
    }
}