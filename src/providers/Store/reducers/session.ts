import { ActionTypeCloseSession } from '../types/session'
import { ActionsSession } from '../actions/session/types'
import {  } from '../actions/auth/dao'
import { clearLocalStorage } from '@/utils/helpers/onlyClient'
import { Cookies } from "react-cookie"

interface IInitialStateAuth {
    loadingCloseSession: boolean
}  

const initialState: IInitialStateAuth = {
    loadingCloseSession: false
}
  
const session = (state = initialState, { type, payload }: ActionsSession) => {
  switch (type) {
    /**
    * ---------------
    * CLOSE SESSION
    * ---------------
    */
    case ActionTypeCloseSession.CLOSE_SESSION_START: {
        return {
            ...state,
            loadingCloseSession: true
        }
    }
    case ActionTypeCloseSession.CLOSE_SESSION_SUCCESS: {
        //DELETE COOKIE FOR REDIRECT PAGES WITH AUTH OR PUBLIC
        const cookies = new Cookies()
        cookies.remove('logged')
        clearLocalStorage()        
        return {
            ...state,
            loadingCloseSession: false
        }
    }
    case ActionTypeCloseSession.CLOSE_SESSION_ERROR: {
        return {
            ...state,
            loadingCloseSession: false
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
  
export default session