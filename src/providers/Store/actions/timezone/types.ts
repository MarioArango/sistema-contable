import type { Dispatch } from 'redux'
import { IGetTimezonesDAO } from "./dao";
import { ActionTypeGetTimezones } from '../../types/timezone';

/**
 * --------------
 * GET TIMEZONES
 * --------------
 */
export type GetTimezones = {
  type: ActionTypeGetTimezones.GET_TIMEZONES_START | ActionTypeGetTimezones.GET_TIMEZONES_SUCCESS | ActionTypeGetTimezones.GET_TIMEZONES_ERROR,
  payload: IGetTimezonesDAO[] | []
}
export type DispatchGetTimezones = Dispatch<GetTimezones>

/**
 * -------------
 * 
 * -------------
 */

//ALL TYPES ACTIONS TIMEZONE
export type ActionsTimezones = GetTimezones