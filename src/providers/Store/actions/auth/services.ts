import { ActionTypeGetCodeAuth, ActionTypeGetCodeForgotPass, ActionTypeResetPassword, ActionTypeSignIn, ActionTypeUpdateDataUser } from '../../types/auth'
import { DispatchAuthSignIn, DispatchGetCodeAuth, DispatchGetCodeForgotPass, DispatchResetPassword, DispatchUpdateDataUser } from './types'
import { IAuthSignInEmailDTO, IAuthSignInPhoneDTO, IGetCodeAuthDTO, IGetCodeForgotPassDTO, IResetPasswordDTO, TypeValidate, TypeValidateForgot } from './dto'
import { IAuthSignInDAO, IGetCodeAuthDAO, IGetCodeForgotPassDAO, IResetPasswordDAO, IUserDAO } from './dao'
import { api } from '@/utils/api'
import { decrypt } from '@/utils/helpers'
import { showMessage } from '@/utils/helpers/onlyClient'
import { fallbackLng } from '@/i18n/settings'

const segmentPath = '/auth'

//SIGN IN
export const rxGetCodeAuth = (values: IGetCodeAuthDTO, cb?: (codeAuth: IGetCodeAuthDAO | null) => void) => async (dispatch: DispatchGetCodeAuth) => {
  try {
    dispatch({type: ActionTypeGetCodeAuth.GET_CODE_AUTH_START, payload: null})
    const res = await api<IGetCodeAuthDTO, IGetCodeAuthDAO>(`${segmentPath}/validate/phone`, { data: values })
    dispatch({type: ActionTypeGetCodeAuth.GET_CODE_AUTH_SUCCESS, payload: res?.record?? null})
    !values.validateCodeId && showMessage(res?.message??'')
    if(res?.success){
      cb && cb(res?.record?? null)
    }
  } catch {
    dispatch({type: ActionTypeGetCodeAuth.GET_CODE_AUTH_ERROR, payload: null})
  }
}

export const rxSignIn = (values: IAuthSignInPhoneDTO | IAuthSignInEmailDTO, typeValidate: TypeValidate, cb?: (defaultLanguage: string) => void) => async (dispatch: DispatchAuthSignIn) => {
  try {
    dispatch({ type: ActionTypeSignIn.AUTH_USER_START, payload: null})
    const res = await api<IAuthSignInPhoneDTO | IAuthSignInEmailDTO, IAuthSignInDAO>(`${segmentPath}/${typeValidate}`, { data: values })
    dispatch({ type: ActionTypeSignIn.AUTH_USER_SUCCESS, payload: res?.record?? null })
    showMessage(res?.message??'')
    if(res?.success){
      const user = decrypt(res.record?.user??'') as IUserDAO
      const language = user?.language?? fallbackLng
      cb && cb(language)
    }
  } catch {
    dispatch({ type: ActionTypeSignIn.AUTH_USER_ERROR, payload: null })
  }
}

export const rxUpdateDataUser = (payload: IUserDAO, cb: () => void) => (dispatch: DispatchUpdateDataUser) => {
  dispatch({ type: ActionTypeUpdateDataUser.UPDATE_DATA_USER, payload })
  cb()
}

//FORGOT PASSWORD
export const rxGetCodeForgotPass = (values: IGetCodeForgotPassDTO, typeValidate: TypeValidateForgot, cb?: (codeForgotPass: IGetCodeForgotPassDAO | null) => void) => async (dispatch: DispatchGetCodeForgotPass) => {
  try {
    dispatch({type: ActionTypeGetCodeForgotPass.GET_CODE_FORGOT_PASS_START, payload: null})
    const res = await api<IGetCodeForgotPassDTO, IGetCodeForgotPassDAO>(`${segmentPath}/forgot-password/${typeValidate}`, { data: values })
    dispatch({type: ActionTypeGetCodeForgotPass.GET_CODE_FORGOT_PASS_SUCCESS, payload: res?.record?? null})
    showMessage(res?.message??'')
    if(res?.success){
      cb && cb(res?.record?? null)
    }
  } catch {
    dispatch({type: ActionTypeGetCodeForgotPass.GET_CODE_FORGOT_PASS_ERROR, payload: null})
  }
}

export const rxResetPassword = (values: IResetPasswordDTO, cb?: () => void) => async (dispatch: DispatchResetPassword) => {
  try {
    dispatch({ type: ActionTypeResetPassword.RESET_PASSWORD_START, payload: null})
    const res = await api<IResetPasswordDTO, IResetPasswordDAO>(`${segmentPath}/reset-password`, { data: values, method: 'PATCH' })
    dispatch({ type: ActionTypeResetPassword.RESET_PASSWORD_SUCCESS, payload: res?.record?? null })
    showMessage(res?.message??'')
    if(res?.success){
      cb && cb()
    }
  } catch {
    dispatch({ type: ActionTypeResetPassword.RESET_PASSWORD_ERROR, payload: null })
  }
}