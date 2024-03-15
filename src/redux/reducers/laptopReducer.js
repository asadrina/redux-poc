import { BUY_LAPTOPS } from "../actions/actionTypes"

const initialLaptopState = {
    numOfLaptops:20
}
export const laptopReducer = (state = initialLaptopState,action) => {
    switch (action.type) {
        case BUY_LAPTOPS:
            return {...state, numOfLaptops:state.numOfLaptops-1}
        default:
            return state
    }
}