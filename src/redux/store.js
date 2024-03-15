import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from 'redux-thunk'
import { mobileReducer } from './reducers/mobileReducer.js'
import { laptopReducer } from './reducers/laptopReducer.js'
import { productsReducer } from './reducers/productReducer.js'

const rootReducer = combineReducers({mobiles:mobileReducer,laptops:laptopReducer,products:productsReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store