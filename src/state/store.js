import { combineReducers, createStore } from "redux";

let rootReducer = combineReducers({
    tablePage: tableReducer, 
})

const store = createStore()