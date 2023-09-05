import { ActionsTimezones } from '../actions/timezone/types'
import { IGetTimezonesDAO } from '../actions/timezone/dao'
import { ActionTypeGetTimezones } from '../types/timezone'

interface IInitialStateTimezone {
  loadingListTimezones: boolean
  listTimezones: IGetTimezonesDAO[] | []
}  

const initialState: IInitialStateTimezone = {
  loadingListTimezones: false,
  listTimezones: [],
}
  
const timezone = (state = initialState, { type, payload }: ActionsTimezones) => {
  switch (type) {
    /**
     * ----------------------
     * GET REGIONAL PARAMS
     * ----------------------
     */
    case ActionTypeGetTimezones.GET_TIMEZONES_START: {
      return {
        ...state,
        loadingListTimezones: true
      }
    }
    case ActionTypeGetTimezones.GET_TIMEZONES_SUCCESS: {
      return {
        ...state,
        loadingListTimezones: false,
        listTimezones: payload
      }
    }
    case ActionTypeGetTimezones.GET_TIMEZONES_ERROR: {
      return {
        ...state,
        loadingListTimezones: false
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
  
export default timezone
  