import { ActionTypeDeleteAccountUser, ActionTypeGenerateCodeProfileUser, ActionTypeProfileUser, ActionTypeSaveContactProfileUser, ActionTypeSaveLocationProfileUser, ActionTypeSaveProfileUser, ActionTypeSendCodeUser, ActionTypeSignUpTempUser, ActionTypeSignUpUser, ActionTypeVerifyCodeProfileUser, ActionTypeVerifyCodeUser, ActionTypeVerifyEmailUser, ActionTypeVerifyExistUser } from '@/redux/types/users'
import { ActionsUser } from '@/redux/actions/users/types'
import { IProfileUserDAO, ISendCodeUserDAO, ISignUpUserDAO, IVerifyEmailUserDAO } from '../actions/users/dao'

interface IInitialStateUser {

  loadingExistUser: boolean
  existUser: boolean

  loadingSendCodeUser: boolean
  codeUser: ISendCodeUserDAO | null

  loadingVerifyCodeUser: boolean

  loadingSignUpTemp: boolean

  loadingUser: boolean
  user: ISignUpUserDAO | null

  loadingVerifyEmail: boolean
  codeEmailUser: IVerifyEmailUserDAO | null

  loadingUserProfile: boolean
  userProfile: IProfileUserDAO | null

  loadingSaveUserProfile: boolean
  
  loadingGenCodeUserProfile: boolean

  loadingVerCodeUserProfile: boolean
  
  loadingSaveContactUserProfile: boolean

  loadingSaveLocationUserProfile: boolean

  loadingDeleteAccountUser: boolean
}  

const initialState: IInitialStateUser = {
  loadingExistUser: false,
  existUser: true,

  loadingSendCodeUser: false,
  codeUser: null,

  loadingVerifyCodeUser: false,

  loadingSignUpTemp: false,

  loadingUser: false,
  user: null,

  loadingVerifyEmail: false,
  codeEmailUser: null,

  loadingUserProfile: false,
  userProfile: null,

  loadingSaveUserProfile: false,

  loadingGenCodeUserProfile: false,

  loadingVerCodeUserProfile: false,

  loadingSaveContactUserProfile: false,

  loadingSaveLocationUserProfile: false,

  loadingDeleteAccountUser: false
}
  
const users = (state = initialState, { type, payload }: ActionsUser) => {
  switch (type) {

    /**
     * -------------------
     * VERIFY USER EXISTS
     * -------------------
     */
    case ActionTypeVerifyExistUser.VERIFY_EXIST_USER_START: {
      return {
        ...state,
        loadingExistUser: true
      }
    }
    case ActionTypeVerifyExistUser.VERIFY_EXIST_USER_SUCCESS: {
      return {
        ...state,
        loadingExistUser: false,
        existUser: payload?.exist?? false
      }
    }
    case ActionTypeVerifyExistUser.VERIFY_EXIST_USER_ERROR: {
      return {
        ...state,
        loadingExistUser: false,
        existUser: true
      }
    }

    /**
     * ----------------
     * SEND CODE USER 
     * ----------------
     */
    case ActionTypeSendCodeUser.SEND_CODE_USER_START: {
      return {
        ...state,
        loadingSendCodeUser: true
      }
    }
    case ActionTypeSendCodeUser.SEND_CODE_USER_SUCCESS: {
      return {
        ...state,
        loadingSendCodeUser: false,
        codeUser: payload
      }
    }
    case ActionTypeSendCodeUser.SEND_CODE_USER_ERROR: {
      return {
        ...state,
        loadingSendCodeUser: false
      }
    }

    /**
     * -----------------
     * VERIFY CODE USER
     * -----------------
     */
    case ActionTypeVerifyCodeUser.VERIFY_CODE_USER_START: {
      return {
        ...state,
        loadingVerifyCodeUser: true
      }
    }
    case ActionTypeVerifyCodeUser.VERIFY_CODE_USER_SUCCESS: {
      return {
        ...state,
        loadingVerifyCodeUser: false
      }
    }
    case ActionTypeVerifyCodeUser.VERIFY_CODE_USER_ERROR: {
      return {
        ...state,
        loadingVerifyCodeUser: false
      }
    }
  
    /**
     * ------------------
     * SIGN UP TEMP USER
     * ------------------
     */
    case ActionTypeSignUpTempUser.SIGNUP_TEMP_USER_START: {
      return {
        ...state,
        loadingSignUpTemp: true
      }
    }
    case ActionTypeSignUpTempUser.SIGNUP_TEMP_USER_SUCCESS: {
      return {
        ...state,
        loadingSignUpTemp: false
      }
    }
    case ActionTypeSignUpTempUser.SIGNUP_TEMP_USER_ERROR: {
      return {
        ...state,
        loadingSignUpTemp: false
      }
    }

    /**
     * -------------
     * SIGN UP USER
     * -------------
     */
    case ActionTypeSignUpUser.SIGNUP_USER_START: {
      return {
        ...state,
        loadingUser: true
      }
    }
    case ActionTypeSignUpUser.SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        loadingUser: false,
        user: payload
      }
    }
    case ActionTypeSignUpUser.SIGNUP_USER_ERROR: {
      return {
        ...state,
        loadingUser: false
      }
    }
    /**
     * --------------------
     * VALIDATE EMAIL USER
     * --------------------
     */
    case ActionTypeVerifyEmailUser.VERIFY_EMAIL_USER_START: {
      return {
        ...state,
        loadingVerifyEmail: true
      }
    }
    case ActionTypeVerifyEmailUser.VERIFY_EMAIL_USER_SUCCESS: {
      return {
        ...state,
        loadingVerifyEmail: false,
      }
    }
    case ActionTypeVerifyEmailUser.VERIFY_EMAIL_USER_ERROR: {
      return {
        ...state,
        loadingVerifyEmail: false
      }
    }

    /**
     * ------------------
     * GET PROFILE USER
     * ------------------
     */
    case ActionTypeProfileUser.PROFILE_USER_START: {
      return {
        ...state,
        loadingUserProfile: true
      }
    }
    case ActionTypeProfileUser.PROFILE_USER_SUCCESS: {
      return {
        ...state,
        loadingUserProfile: false,
        userProfile: payload??null
      }
    }
    case ActionTypeProfileUser.PROFILE_USER_ERROR: {
      return {
        ...state,
        loadingUserProfile: false
      }
    }

    /**
     * ------------------
     * SAVE PROFILE USER
     * ------------------
     */
    case ActionTypeSaveProfileUser.SAVE_PROFILE_USER_START: {
      return {
        ...state,
        loadingSaveUserProfile: true
      }
    }
    case ActionTypeSaveProfileUser.SAVE_PROFILE_USER_SUCCESS: {
      return {
        ...state,
        loadingSaveUserProfile: false
      }
    }
    case ActionTypeSaveProfileUser.SAVE_PROFILE_USER_ERROR: {
      return {
        ...state,
        loadingSaveUserProfile: false
      }
    }

    /**
     * ----------------------------
     * GENERATE CODE PROFILE USER
     * ----------------------------
     */
    case ActionTypeGenerateCodeProfileUser.GENERATE_CODE_PROFILE_USER_START: {
      return {
        ...state,
        loadingGenCodeUserProfile: true
      }
    }
    case ActionTypeGenerateCodeProfileUser.GENERATE_CODE_PROFILE_USER_SUCCESS: {
      return {
        ...state,
        loadingGenCodeUserProfile: false
      }
    }
    case ActionTypeGenerateCodeProfileUser.GENERATE_CODE_PROFILE_USER_ERROR: {
      return {
        ...state,
        loadingGenCodeUserProfile: false
      }
    }

    /**
     * ----------------------------
     * VERIFY CODE PROFILE USER
     * ----------------------------
     */
    case ActionTypeVerifyCodeProfileUser.VERIFY_CODE_PROFILE_USER_ERROR: {
      return {
        ...state,
        loadingVerCodeUserProfile: true
      }
    }
    case ActionTypeVerifyCodeProfileUser.VERIFY_CODE_PROFILE_USER_SUCCESS: {
      return {
        ...state,
        loadingVerCodeUserProfile: false
      }
    }
    case ActionTypeVerifyCodeProfileUser.VERIFY_CODE_PROFILE_USER_START: {
      return {
        ...state,
        loadingVerCodeUserProfile: false
      }
    }

    /**
     * --------------------------
     * SAVE CONTACT PROFILE USER
     * --------------------------
     */
    case ActionTypeSaveContactProfileUser.SAVE_CONTACT_PROFILE_USER_START: {
      return {
        ...state,
        loadingSaveContactUserProfile: true
      }
    }
    case ActionTypeSaveContactProfileUser.SAVE_CONTACT_PROFILE_USER_SUCCESS: {
      return {
        ...state,
        loadingSaveContactUserProfile: false
      }
    }
    case ActionTypeSaveContactProfileUser.SAVE_CONTACT_PROFILE_USER_ERROR: {
      return {
        ...state,
        loadingSaveContactUserProfile: false
      }
    }

    /**
     * ---------------------------
     * SAVE LOCATION PROFILE USER
     * ---------------------------
     */
    case ActionTypeSaveLocationProfileUser.SAVE_LOCATION_PROFILE_USER_START: {
      return {
        ...state,
        loadingSaveLocationUserProfile: true
      }
    }
    case ActionTypeSaveLocationProfileUser.SAVE_LOCATION_PROFILE_USER_SUCCESS: {
      return {
        ...state,
        loadingSaveLocationUserProfile: false
      }
    }
    case ActionTypeSaveLocationProfileUser.SAVE_LOCATION_PROFILE_USER_ERROR: {
      return {
        ...state,
        loadingSaveLocationUserProfile: false
      }
    }
    /**
     * --------------------
     * DELETE ACCOUNT USER
     * --------------------
     */
    case ActionTypeDeleteAccountUser.DELETE_ACCOUNT_USER_START: {
      return {
        ...state,
        loadingDeleteAccountUser: true
      }
    }
    case ActionTypeDeleteAccountUser.DELETE_ACCOUNT_USER_SUCCESS: {
      return {
        ...state,
        loadingDeleteAccountUser: false
      }
    }
    case ActionTypeDeleteAccountUser.DELETE_ACCOUNT_USER_ERROR: {
      return {
        ...state,
        loadingDeleteAccountUser: false
      }
    }
    
    default: {
      return state
    }
  }
}
  
export default users
  