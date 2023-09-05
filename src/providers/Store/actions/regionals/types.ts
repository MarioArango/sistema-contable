import type { Dispatch } from 'redux'
import { IGetRegionalDAO } from "./dao";
import { ActionTypeGetRegionals, ActionTypeSetRegional } from '../../types/regionals';
import { ISetRegionalDTO } from './dto';

/**
 * -----------------------
 * GET REGIONAL PARAMS
 * -----------------------
 */
export type GetRegionals = {
  type: ActionTypeGetRegionals.GET_REGIONALS_START | ActionTypeGetRegionals.GET_REGIONALS_SUCCESS | ActionTypeGetRegionals.GET_REGIONALS_ERROR,
  payload: IGetRegionalDAO[] | []
}
export type DispatchGetRegionals = Dispatch<GetRegionals>
/**
 * ----------------------
 * SET REGIONAL PARAMS
 * ----------------------
 */
export type SetRegional = {
  type: ActionTypeSetRegional.SET_REGIONAL,
  payload: ISetRegionalDTO
}
export type DispatchSetRegional = Dispatch<SetRegional>


/**
 * -------------
 * 
 * -------------
 */

//ALL TYPES ACTIONS REFIONALS
export type ActionsRegionals = GetRegionals | SetRegional