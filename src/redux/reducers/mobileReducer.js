import { BUY_MOBILES } from "../actions/actionTypes"

const initialMobileState = {
    numOfMobiles:10
}
export const mobileReducer = (state = initialMobileState,action) => {
    switch (action.type) {
        case BUY_MOBILES:
            return {...state, numOfMobiles:state.numOfMobiles-1}
        default:
            return state
    }
}