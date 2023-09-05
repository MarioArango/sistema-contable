import { ActionTypeSetSocket } from '../../types/sockets';
import { ISetSocketDTO } from './dto';

export const rxSetSocket = (payload: ISetSocketDTO) => ({ type: ActionTypeSetSocket.SET_SOCKET, payload })