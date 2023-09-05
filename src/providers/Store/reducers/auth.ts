import { ActionTypeGetCodeAuth, ActionTypeGetCodeForgotPass, ActionTypeResetPassword, ActionTypeSignIn, ActionTypeUpdateDataUser } from '../types/auth'
import { ActionsAuth } from '../actions/auth/types'
import { IUser, ISuscription, IRoles, IRegionalSettings, ITimeZone, IUserDAO, IGetCodeAuthDAO, IGetCodeForgotPassDAO } from '../actions/auth/dao'
import { decrypt, encrypt } from '@/utils/helpers'
import { getLocalStorage, setLocalStorage } from '@/utils/helpers/onlyClient'
import { RegionalParams } from './regionals'
import { Cookies } from "react-cookie"

export enum AuthUser {
  TOKEN = 'TOKEN',
  USER = 'USER',
  USER_SUBSCRIPTION = 'USER_SUBSCRIPTION',
  USER_ROLES = 'USER_ROLES',
  USER_PERMITS = 'USER_PERMITS',
  USER_REGIONAL_SETTINGS = 'USER_REGIONAL_SETTINGS',
  USER_TIMEZONE = 'USER_TIMEZONE'
}

interface IInitialStateAuth {
    loadingGetCodeAuth: boolean
    codeAuth: IGetCodeAuthDAO | null
    
    loadingAuthUser: boolean
    user: IUser | null
    token: string
    userSubscriptions: ISuscription[] | []
    userRoles: IRoles[] | []
    userPermits: string[] | [],
    userRegionalSettings: IRegionalSettings | null
    userTimezone: ITimeZone | null

    loadingGetCodeForgotPass: boolean
    codeForgotPass: IGetCodeForgotPassDAO | null

    loadingResetPassword: boolean
}  

const initialState: IInitialStateAuth = {
    loadingGetCodeAuth: false,
    codeAuth: null,
    
    loadingAuthUser: false,
    user: getLocalStorage<IUser>(AuthUser.USER)??null,
    token: getLocalStorage<string>(AuthUser.TOKEN, false)??'',
    userSubscriptions: getLocalStorage<ISuscription[]>(AuthUser.USER_SUBSCRIPTION)??[],
    userRoles: getLocalStorage<IRoles[]>(AuthUser.USER_ROLES)??[],
    userPermits: getLocalStorage<string[]>(AuthUser.USER_PERMITS)??[],
    userRegionalSettings: getLocalStorage<IRegionalSettings>(AuthUser.USER_REGIONAL_SETTINGS)??null,
    userTimezone: getLocalStorage<ITimeZone>(AuthUser.USER_TIMEZONE)??null,

    loadingGetCodeForgotPass: false,
    codeForgotPass: null,

    loadingResetPassword: false
}
  
const auth = (state = initialState, { type, payload }: ActionsAuth) => {
  switch (type) {
    /**
     * ----------------
     * SEND CODE USER 
     * ----------------
     */
      case ActionTypeGetCodeAuth.GET_CODE_AUTH_START: {
        return {
          ...state,
          loadingGetCodeAuth: true
        }
      }
      case ActionTypeGetCodeAuth.GET_CODE_AUTH_SUCCESS: {
        return {
          ...state,
          loadingGetCodeAuth: false,
          codeAuth: payload
        }
      }
      case ActionTypeGetCodeAuth.GET_CODE_AUTH_ERROR: {
        return {
          ...state,
          loadingGetCodeAuth: false
        }
      }

    /**
     * -------------
     * SIGN IN USER
     * -------------
     */
    case ActionTypeSignIn.AUTH_USER_START: {
      return {
        ...state,
        loadingAuthUser: true
      }
    }
    case ActionTypeSignIn.AUTH_USER_SUCCESS: {

      //SET COOKIE FOR REDIRECT PAGES WITH AUTH OR PUBLIC
      const cookies = new Cookies()
      cookies.remove('logged')
      cookies.set("logged", encrypt(process?.env?.NEXT_PUBLIC_SECRET_LOGGED_COOKIE??''))

      //CLEAR DEFAULT REGIONAL PARAMS
      localStorage.removeItem(RegionalParams.REGIONAL_PARAMS)
      
      //SAVE TOKEN
      setLocalStorage<string>(AuthUser.TOKEN, payload?.token??'', true)

      //SAVE USER
      const authUser: IUserDAO = decrypt(payload?.user??'')??null
      let user: IUser | null = null
      if(authUser){
        user = {
          _id: authUser?._id,
          name: authUser?.name,
          lastname: authUser?.lastname,
          userType: authUser?.userType,
          prefix: authUser?.prefix,
          phoneNumber: authUser?.phoneNumber,
          validatedPhone: authUser?.validatedPhone,
          email: authUser?.email,
          validatedEmail: authUser?.validatedEmail,
          password: authUser?.password,
          language: authUser?.language,
          avatar: authUser?.avatar,
          activeSessions: authUser?.activeSessions,
          hash: authUser?.hash,
          numberActiveSessionsAllowed: authUser?.numberActiveSessionsAllowed,
          identityCard: authUser.identityCard,
          birthDate: authUser.birthDate,
          profession: authUser.profession,
          city: authUser.city,
          address: authUser.address,
          gender: authUser.gender
        }
        setLocalStorage<IUser>(AuthUser.USER, user)
        setLocalStorage<ISuscription[]>(AuthUser.USER_SUBSCRIPTION, authUser?.subscriptions)
        setLocalStorage<IRoles[]>(AuthUser.USER_ROLES, authUser.roles)
        setLocalStorage<string[]>(AuthUser.USER_PERMITS, authUser.permits)
        setLocalStorage<IRegionalSettings>(AuthUser.USER_REGIONAL_SETTINGS, authUser.regionalSettings)
        setLocalStorage<ITimeZone>(AuthUser.USER_TIMEZONE, authUser.timeZone)
      }
      
      return {
        ...state,
        loadingAuthUser: false,
        user,
        token: payload?.token??'',
        userSubscriptions: authUser?.subscriptions?? [],
        userRoles: authUser?.roles?? [],
        userPermits: authUser.permits??[],
        userRegionalSettings: authUser?.regionalSettings?? null,
        userTimezone: authUser?.timeZone?? null
      }
    }
    case ActionTypeSignIn.AUTH_USER_ERROR: {
      return {
        ...state,
        loadingAuthUser: false
      }
    }

    /**
     * -----------------
     * UPDATE DATA USER
     * -----------------
     */
     case ActionTypeUpdateDataUser.UPDATE_DATA_USER: {
      if(payload){
        //UPDATE USER
        const authUser: IUserDAO = payload
        let user: IUser | null = null
        if(authUser){
          user = {
            _id: authUser?._id,
            name: authUser?.name,
            lastname: authUser?.lastname,
            userType: authUser?.userType,
            prefix: authUser?.prefix,
            phoneNumber: authUser?.phoneNumber,
            validatedPhone: authUser?.validatedPhone,
            email: authUser?.email,
            validatedEmail: authUser?.validatedEmail,
            password: authUser?.password,
            language: authUser?.language,
            avatar: authUser?.avatar,
            activeSessions: authUser?.activeSessions,
            hash: authUser?.hash,
            numberActiveSessionsAllowed: authUser?.numberActiveSessionsAllowed,
            identityCard: authUser.identityCard,
            birthDate: authUser.birthDate,
            profession: authUser.profession,
            city: authUser.city,
            address: authUser.address,
            gender: authUser.gender
          }
          setLocalStorage<IUser>(AuthUser.USER, user)
          setLocalStorage<ISuscription[]>(AuthUser.USER_SUBSCRIPTION, authUser?.subscriptions)
          setLocalStorage<IRoles[]>(AuthUser.USER_ROLES, authUser.roles)
          setLocalStorage<string[]>(AuthUser.USER_PERMITS, authUser.permits)
          setLocalStorage<IRegionalSettings>(AuthUser.USER_REGIONAL_SETTINGS, authUser.regionalSettings)
          setLocalStorage<ITimeZone>(AuthUser.USER_TIMEZONE, authUser.timeZone)
        }
        
        return {
          ...state,
          user,
          userSubscriptions: authUser?.subscriptions?? [],
          userRoles: authUser?.roles?? [],
          userPermits: authUser.permits??[],
          userRegionalSettings: authUser?.regionalSettings?? null,
          userTimezone: authUser?.timeZone?? null
        }
      }
    }

    /**
     * ----------------------------------------
     * SEND AND VALIDATE CODE FORGOT PASSWORD
     * ----------------------------------------
     */
     case ActionTypeGetCodeForgotPass.GET_CODE_FORGOT_PASS_START: {
        return {
          ...state,
          loadingGetCodeForgotPass: true
        }
      }
    case ActionTypeGetCodeForgotPass.GET_CODE_FORGOT_PASS_SUCCESS: {
        return {
          ...state,
          loadingGetCodeForgotPass: false,
          codeForgotPass: payload
        }
      }
    case ActionTypeGetCodeForgotPass.GET_CODE_FORGOT_PASS_ERROR: {
        return {
          ...state,
          loadingGetCodeForgotPass: false
        }
      }

     /**
     * ----------------------------------------
     * SEND AND VALIDATE CODE FORGOT PASSWORD
     * ----------------------------------------
     */
     case ActionTypeResetPassword.RESET_PASSWORD_START: {
        return {
          ...state,
          loadingResetPassword: true
        }
      }
    case ActionTypeResetPassword.RESET_PASSWORD_SUCCESS: {
        return {
          ...state,
          loadingResetPassword: false
        }
      }
    case ActionTypeResetPassword.RESET_PASSWORD_ERROR: {
        return {
          ...state,
          loadingResetPassword: false
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
  
export default auth
  