
import { CompanyState, CompanyAction, Company } from '../types/company'

const defaultState: CompanyState = {
  data: {} as Company,

}

const companyReducer = (state: CompanyState = defaultState, action:  CompanyAction) => {
    return state
  }
  
export default companyReducer 