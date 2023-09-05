import { ActionsSockets } from '@/redux/actions/sockets/types'
import { ActionTypeSetSocket } from '../types/sockets'
import { Socket } from 'socket.io-client'

interface IInitialStateUser {
    socket: Socket | null
}  

const initialState: IInitialStateUser = {
    socket: null
}
  
const sockets = (state = initialState, { type, payload }: ActionsSockets) => {
  switch (type) {
    /**
     * -----------------------------
     * SET SOCKET FOR ACCESS GLOBAL
     * -----------------------------
     */
    case ActionTypeSetSocket.SET_SOCKET: {
      return {
        ...state,
        socket: payload?.socket
      }
    }

    /**
     * -------------
     * *******
     * -------------
     */
    
    default: {
      return state
    }
  }
}
  
export default sockets
  