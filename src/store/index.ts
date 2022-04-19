
   
import { combineReducers } from "redux";
import companyReducer from "./reducers/company";


interface AppState {
    companies: any;
}

const rootReducers = combineReducers<AppState>({
    companies: companyReducer
})


export default rootReducers;