import { ActionTypeGetRegionals, ActionTypeSetRegional } from '../types/regionals'
import { ActionsRegionals } from '../actions/regionals/types'
import { IGetRegionalDAO } from '../actions/regionals/dao'
import { ISetRegionalDTO } from '../actions/regionals/dto'
import { setLocalStorage } from '@/utils/helpers/onlyClient'

export enum RegionalParams {
  REGIONAL_PARAMS = 'REGIONAL_PARAMS'
}

interface IInitialStateRegionals {
  loadingListRegionals: boolean
  listRegionals: IGetRegionalDAO[] | []

  regionalParams: ISetRegionalDTO | null
}  

const initialState: IInitialStateRegionals = {
  loadingListRegionals: false,
  listRegionals: [],

  regionalParams: null
}
  
const regionals = (state = initialState, { type, payload }: ActionsRegionals) => {
  switch (type) {
    /**
     * ----------------------
     * GET REGIONAL PARAMS
     * ----------------------
     */
    case ActionTypeGetRegionals.GET_REGIONALS_START: {
      return {
        ...state,
        loadingListRegionals: true
      }
    }
    case ActionTypeGetRegionals.GET_REGIONALS_SUCCESS: {
      return {
        ...state,
        loadingListRegionals: false,
        listRegionals: payload
      }
    }
    case ActionTypeGetRegionals.GET_REGIONALS_ERROR: {
      return {
        ...state,
        loadingListRegionals: false
      }
    }

    /**
     * ----------------------
     * SET REGIONAL PARAMS
     * ----------------------
     */
    case ActionTypeSetRegional.SET_REGIONAL: {
      setLocalStorage<ISetRegionalDTO>(RegionalParams.REGIONAL_PARAMS, payload)
      return {
        ...state,
        regionalParams: payload
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
  
export default regionals
  