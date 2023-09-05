import { ActionTypeGetPolicies } from '../types/policies'
import { ActionsPolicies } from '../actions/policies/type'
import { IGetPoliciesDAO } from '../actions/policies/dao'

interface IInitialStatePolicies {
    loadingListPolicies: boolean
    listPolicies: IGetPoliciesDAO[] | []
}  

const initialState: IInitialStatePolicies = {
    loadingListPolicies: false,
    listPolicies: []
}
  
const regionals = (state = initialState, { type, payload }: ActionsPolicies) => {
  switch (type) {
    /**
     * --------------
     * GET POLICIES
     * --------------
     */
    case ActionTypeGetPolicies.GET_POLICIES_START: {
      return {
        ...state,
        loadingListPolicies: true
      }
    }
    case ActionTypeGetPolicies.GET_POLICIES_SUCCESS: {
      return {
        ...state,
        loadingListPolicies: false,
        listPolicies: payload
      }
    }
    case ActionTypeGetPolicies.GET_POLICIES_ERROR: {
      return {
        ...state,
        loadingListPolicies: false
      }
    }
    
    default: {
      return state
    }
  }
}
  
export default regionals
  