import type { Dispatch } from 'redux'
import { ActionTypeCloseSession } from "../../types/session"

/**
 * --------------
 * CLOSE SESSION
 * --------------
 */
export type CloseSession = {
  type: ActionTypeCloseSession.CLOSE_SESSION_START | ActionTypeCloseSession.CLOSE_SESSION_SUCCESS | ActionTypeCloseSession.CLOSE_SESSION_ERROR,
  payload: null
}
  export type DispatchCloseSession = Dispatch<CloseSession>

  /**
 * -------------
 * 
 * -------------
 */

//ALL TYPES ACTIONS SESSION
export type ActionsSession =  CloseSession