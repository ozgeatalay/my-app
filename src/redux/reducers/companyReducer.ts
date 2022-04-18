import { ActionCompany } from '../action-types'

interface NotesState {
company: string[]
}

  const initialState = {
    company: []
  }
  
  export default function companyReducer(state: NotesState = initialState, action = ActionCompany) {
    switch (action.type) {
      case "TYPE_COMPANIES": {
        return {
          ...state,
            companies: action.payload
        }
      }
      default:
        return state
    }
  }
  