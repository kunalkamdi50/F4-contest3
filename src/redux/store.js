import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import  productReducer  from "./reducer/productReducer";
import myCartReducer from "./reducer/myCartReducer";


const rootReducer = combineReducers({
    product: productReducer,
    cart: myCartReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store