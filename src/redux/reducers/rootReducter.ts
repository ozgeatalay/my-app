import { combineReducers } from 'redux'
import companyReducer from './companyReducer'

const rootReducer = combineReducers({
    company: companyReducer,
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;