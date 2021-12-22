import { combineReducers, createStore } from "redux";
import tableReducer from "./table-reducer";

let rootReducer = combineReducers({
	tablePage: tableReducer,
})

const store = createStore(rootReducer)

export default store