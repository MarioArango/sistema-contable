import type { Dispatch } from 'redux'
import { IGetPoliciesDAO } from "./dao";
import { ActionTypeGetPolicies } from '../../types/policies';

/**
 * -----------------------
 * GET REGIONAL PARAMS
 * -----------------------
 */
export type GetPolicies = {
  type: ActionTypeGetPolicies.GET_POLICIES_START | ActionTypeGetPolicies.GET_POLICIES_SUCCESS | ActionTypeGetPolicies.GET_POLICIES_ERROR,
  payload: IGetPoliciesDAO[] | []
}
export type DispatchGetPolicies = Dispatch<GetPolicies>


/**
 * -------------
 * 
 * -------------
 */

//ALL TYPES ACTIONS POLICIES
export type ActionsPolicies = GetPolicies