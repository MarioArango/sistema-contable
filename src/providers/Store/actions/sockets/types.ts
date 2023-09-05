import { ActionTypeSetSocket } from '../../types/sockets';
import { ISetSocketDTO } from './dto';

/**
 * -------------
 * GET USERS
 * -------------
 */
export type SetSocket = {
  type: ActionTypeSetSocket.SET_SOCKET,
  payload?: ISetSocketDTO
}
/**
 * -------------
 * 
 * -------------
 */

//ALL TYPES ACTIONS USER
export type ActionsSockets = SetSocket