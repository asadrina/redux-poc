import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../actions/actionTypes"

const initialProductState = {
    loading:false,
    products:[],
    error:''
}
export const productsReducer = (state = initialProductState,action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {...state, loading:true}
        case FETCH_PRODUCTS_SUCCESS:
            return {loading:false,products:action.data,error:''}
        case FETCH_PRODUCTS_FAILURE:
                return {products:'',error:action.data}
        default:
            return state
    }
}