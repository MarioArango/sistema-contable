import { ActionTypeDeletePhotoProfileUser, ActionTypePhotoProfileUser } from '../types/files'
import { ActionsFiles } from '../actions/files/types'

interface IInitialStateUser {

  loadingPhotoUserProfile: boolean

  loadingDelPhotoUserProfile: boolean
}  

const initialState: IInitialStateUser = {

  loadingPhotoUserProfile: false,

  loadingDelPhotoUserProfile: false,
}
  
const files = (state = initialState, { type, payload }: ActionsFiles) => {
  switch (type) {

    /**
     * ----------------------------------
     * GET URL PUBLIC PHOTO PROFILE USER
     * ----------------------------------
     */
    case ActionTypePhotoProfileUser.PHOTO_PROFILE_USER_START: {
      return {
        ...state,
        loadingPhotoUserProfile: true
      }
    }
    case ActionTypePhotoProfileUser.PHOTO_PROFILE_USER_SUCCESS: {
      return {
        ...state,
        loadingPhotoUserProfile: false
      }
    }
    case ActionTypePhotoProfileUser.PHOTO_PROFILE_USER_ERROR: {
      return {
        ...state,
        loadingPhotoUserProfile: false
      }
    }

    /**
     * -------------------------------------
     * DELETE URL PUBLIC PHOTO PROFILE USER
     * -------------------------------------
     */
    case ActionTypeDeletePhotoProfileUser.DELETE_PHOTO_PROFILE_USER_START: {
      return {
        ...state,
        loadingDelPhotoUserProfile: true
      }
    }
    case ActionTypeDeletePhotoProfileUser.DELETE_PHOTO_PROFILE_USER_SUCCESS: {
      return {
        ...state,
        loadingDelPhotoUserProfile: false
      }
    }
    case ActionTypeDeletePhotoProfileUser.DELETE_PHOTO_PROFILE_USER_ERROR: {
      return {
        ...state,
        loadingDelPhotoUserProfile: false
      }
    }
  
    default: {
      return state
    }
  }
}
  
export default files
  