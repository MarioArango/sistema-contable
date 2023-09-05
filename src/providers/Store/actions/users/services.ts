import { ActionTypeDeleteAccountUser, ActionTypeGenerateCodeProfileUser, ActionTypeProfileUser, ActionTypeSaveContactProfileUser, ActionTypeSaveLocationProfileUser, ActionTypeSaveProfileUser, ActionTypeSendCodeUser, ActionTypeSignUpTempUser, ActionTypeSignUpUser, ActionTypeVerifyCodeProfileUser, ActionTypeVerifyCodeUser, ActionTypeVerifyEmailUser, ActionTypeVerifyExistUser } from '@/providers/Store/types/users';
import { DispatchDeleteAccountUser, DispatchGenerateCodeProfileUser, DispatchProfileUser, DispatchSaveContactProfileUser, DispatchSaveLocationProfileUser, DispatchSaveProfileUser, DispatchSendCodeUser, DispatchSignUpTempUser, DispatchSignUpUser, DispatchVerifyCodeProfileUser, DispatchVerifyCodeUser, DispatchVerifyEmailUser, DispatchVerifyExistUser } from './types';
import { IDeleteAccountUserDTO, IGenerateCodeProfileUserDTO, IProfileUserDTO, ISaveContactProfileUserDTO, ISaveLocationProfileUserDTO, ISaveProfileUserDTO, ISendCodeUserDTO, ISignUpTempUserDTO, ISignUpUserDTO, IVerifyCodeProfileUserDTO, IVerifyCodeUserDTO, IVerifyEmailUserDTO, IVerifyExistUserDTO, TypeSaveContact } from './dto';
import { IDeleteAccountUserDAO, IGenerateCodeProfileUserDAO, IProfileUserDAO, ISaveContactProfileUserDAO, ISaveLocationProfileUserDAO, ISaveProfileUserDAO, ISendCodeUserDAO, ISignUpTempUserDAO, ISignUpUserDAO, IVerifyCodeProfileUserDAO, IVerifyCodeUserDAO, IVerifyEmailUserDAO, IVerifyExistUserDAO } from './dao';
import { showMessage } from '@/utils/helpers/onlyClient'

import { api } from '@/utils/api';

const segmentPath = '/users'

/**
 * --------
 * SIGN UP
 * --------
 */
export const rxVerifyUserExist = (values: IVerifyExistUserDTO, cb?: (exist: boolean) => void) => async (dispatch: DispatchVerifyExistUser) => {
  try {
    dispatch({ type: ActionTypeVerifyExistUser.VERIFY_EXIST_USER_START, payload: null })
    const res = await api<IVerifyExistUserDTO, IVerifyExistUserDAO>(`${segmentPath}/exists`, { data: values })
    dispatch({ type: ActionTypeVerifyExistUser.VERIFY_EXIST_USER_SUCCESS, payload: res?.record?? null })
    showMessage(res?.message??'')
    cb && cb(res?.record?.exist?? false)
  } catch {
    dispatch({ type: ActionTypeVerifyExistUser.VERIFY_EXIST_USER_ERROR, payload: null })
  }
}

export const rxSendCodeUser = (values: ISendCodeUserDTO, cb?: (codeUser: ISendCodeUserDAO | null) => void) => async (dispatch: DispatchSendCodeUser) => {
  try {
    dispatch({type: ActionTypeSendCodeUser.SEND_CODE_USER_START, payload: null})
    const res = await api<ISendCodeUserDTO, ISendCodeUserDAO>(`${segmentPath}/verify`, { data: values })
    dispatch({type: ActionTypeSendCodeUser.SEND_CODE_USER_SUCCESS, payload: res?.record?? null})
    showMessage(res?.message??'')
    cb && cb(res?.record?? null)
  } catch {
    dispatch({type: ActionTypeSendCodeUser.SEND_CODE_USER_ERROR, payload: null})
  }
}

export const rxVerifyCodeUser = (values: IVerifyCodeUserDTO, cb?: (isCodeUserVerified: boolean) => void) => async (dispatch: DispatchVerifyCodeUser) => {
  try {
    dispatch({type: ActionTypeVerifyCodeUser.VERIFY_CODE_USER_START})
    const res = await api<IVerifyCodeUserDTO, IVerifyCodeUserDAO>(`${segmentPath}/verify`, { data: values })
    dispatch({type: ActionTypeVerifyCodeUser.VERIFY_CODE_USER_SUCCESS})
    cb && cb(res?.success?? false)
    showMessage(res?.message??'')
  } catch {
    dispatch({type: ActionTypeVerifyCodeUser.VERIFY_CODE_USER_ERROR})
  }
}

export const rxSignUpTemp = (values: ISignUpTempUserDTO, cb?: () => void) => async (dispatch: DispatchSignUpTempUser ) => {
  try {
    dispatch({ type: ActionTypeSignUpTempUser.SIGNUP_TEMP_USER_START, payload: null})
    await api<ISignUpTempUserDTO, ISignUpTempUserDAO>(`${segmentPath}/temp`, { data: values })
    dispatch({ type: ActionTypeSignUpTempUser.SIGNUP_TEMP_USER_SUCCESS, payload: null})
    cb && cb()
  } catch {
    dispatch({ type: ActionTypeSignUpTempUser.SIGNUP_TEMP_USER_ERROR, payload: null})    
  }
}

export const rxSignUp = (values: ISignUpUserDTO, cb?: (isRegistered: boolean) => void) => async (dispatch: DispatchSignUpUser) => {
  try {
    dispatch({ type: ActionTypeSignUpUser.SIGNUP_USER_START, payload: null})
    const res = await api<ISignUpUserDTO, ISignUpUserDAO>(`${segmentPath}`, { data: values })
    dispatch({ type: ActionTypeSignUpUser.SIGNUP_USER_SUCCESS, payload: res?.record?? null })
    showMessage(res?.message??'')
    cb && cb(res?.success?? false)
  } catch {
    dispatch({ type: ActionTypeSignUpUser.SIGNUP_USER_ERROR, payload: null })
  }
}

//VALIDATE EMAIL AFTER REGISTER
export const rxVerifyEmailUser = (values: IVerifyEmailUserDTO, cb?: (codeUser: IVerifyEmailUserDAO | null) => void ) => async (dispatch: DispatchVerifyEmailUser) => {
  try {
    dispatch({ type: ActionTypeVerifyEmailUser.VERIFY_EMAIL_USER_START, payload: null})
    const res = await api<IVerifyEmailUserDTO, IVerifyEmailUserDAO>(`${segmentPath}/validate/email`, { data: values })
    dispatch({ type: ActionTypeVerifyEmailUser.VERIFY_EMAIL_USER_SUCCESS, payload: res?.record?? null})
    showMessage(res?.message??'')
    cb && cb(res?.record?? null)
  } catch {
    dispatch({ type: ActionTypeVerifyEmailUser.VERIFY_EMAIL_USER_ERROR, payload: null})
  }
}

/**
 * -------------
 * PROFILE USER
 * -------------
 */

//UPDATE DATA GENERAL PROFILE USER

export const rxGetProfileUser = (values: IProfileUserDTO, cb?: (dataUser: IProfileUserDAO | null) => void) => async (dispatch: DispatchProfileUser) => {
  try {
    dispatch({ type: ActionTypeProfileUser.PROFILE_USER_START, payload: null})
    const res = await api<IProfileUserDTO, IProfileUserDAO>(`${segmentPath}/${values.id}`, { data: values, method: 'GET', hasEncrypt: true })
    dispatch({ type: ActionTypeProfileUser.PROFILE_USER_SUCCESS, payload: res?.record??null})
    if(res?.success){
      cb && cb(res?.record??null)
    }
  } catch {
    dispatch({ type: ActionTypeProfileUser.PROFILE_USER_ERROR, payload: null})
  }
}

export const rxSaveProfileUser = (values: ISaveProfileUserDTO, cb: () => void) => async (dispatch: DispatchSaveProfileUser) => {
  try {
    dispatch({ type: ActionTypeSaveProfileUser.SAVE_PROFILE_USER_START, payload: null})
    const res = await api<ISaveProfileUserDTO, ISaveProfileUserDAO>(`${segmentPath}`, { data: values, method: 'PATCH' })
    dispatch({ type: ActionTypeSaveProfileUser.SAVE_PROFILE_USER_SUCCESS, payload: res?.record?? null})
    showMessage(res?.message??'')
    if(res?.success){
      cb()
    }
  } catch {
    dispatch({ type: ActionTypeSaveProfileUser.SAVE_PROFILE_USER_ERROR, payload: null})
  }
}

//UPDATE EMAIL OR PHONE NUMBER

export const rxGenerateCodeProfileUser = (values: IGenerateCodeProfileUserDTO, cb: (data: IGenerateCodeProfileUserDAO | null) => void) => async (dispatch: DispatchGenerateCodeProfileUser) => {
  try {
    dispatch({ type: ActionTypeGenerateCodeProfileUser.GENERATE_CODE_PROFILE_USER_START, payload: null})
    const res = await api<IGenerateCodeProfileUserDTO, IGenerateCodeProfileUserDAO>(`${segmentPath}/generate/code`, { data: values })
    dispatch({ type: ActionTypeGenerateCodeProfileUser.GENERATE_CODE_PROFILE_USER_SUCCESS, payload: res?.record?? null})
    showMessage(res?.message??'')
    cb(res?.record??null)
  } catch {
    dispatch({ type: ActionTypeGenerateCodeProfileUser.GENERATE_CODE_PROFILE_USER_ERROR, payload: null})
  }
}

export const rxVerifyCodeProfileUser = (values: IVerifyCodeProfileUserDTO, cb: (data: boolean) => void) => async (dispatch: DispatchVerifyCodeProfileUser) => {
  try {
    dispatch({ type: ActionTypeVerifyCodeProfileUser.VERIFY_CODE_PROFILE_USER_START, payload: null})
    const res = await api<IVerifyCodeProfileUserDTO, IVerifyCodeProfileUserDAO>(`${segmentPath}/validate/code`, { data: values, method: 'PATCH' })
    dispatch({ type: ActionTypeVerifyCodeProfileUser.VERIFY_CODE_PROFILE_USER_SUCCESS, payload: res?.record?? null})
    showMessage(res?.message??'')
    cb(res?.success??false)
  } catch {
    dispatch({ type: ActionTypeVerifyCodeProfileUser.VERIFY_CODE_PROFILE_USER_ERROR, payload: null})
  }
}

export const rxSaveContactProfileUser = (values: ISaveContactProfileUserDTO, typeSaveContact: TypeSaveContact, cb: (isOk: boolean) => void) => async (dispatch: DispatchSaveContactProfileUser) => {
  try {
    dispatch({ type: ActionTypeSaveContactProfileUser.SAVE_CONTACT_PROFILE_USER_START, payload: null})
    const res = await api<ISaveContactProfileUserDTO, ISaveContactProfileUserDAO>(`${segmentPath}/change/${typeSaveContact}`, { data: values, method: 'PATCH' })
    dispatch({ type: ActionTypeSaveContactProfileUser.SAVE_CONTACT_PROFILE_USER_SUCCESS, payload: res?.record?? null})
    showMessage(res?.message??'')
    cb(res?.success??false)
  } catch {
    dispatch({ type: ActionTypeSaveContactProfileUser.SAVE_CONTACT_PROFILE_USER_ERROR, payload: null})
  }
}

export const rxSaveLocationProfileUser = (values: ISaveLocationProfileUserDTO, cb: () => void) => async (dispatch: DispatchSaveLocationProfileUser) => {
  try {
    dispatch({ type: ActionTypeSaveLocationProfileUser.SAVE_LOCATION_PROFILE_USER_START, payload: null})
    const res = await api<ISaveLocationProfileUserDTO, ISaveLocationProfileUserDAO>(`${segmentPath}/location`, { data: values, method: 'PATCH' })
    dispatch({ type: ActionTypeSaveLocationProfileUser.SAVE_LOCATION_PROFILE_USER_SUCCESS, payload: res?.record?? null})
    showMessage(res?.message??'')
    if(res?.success){
      cb()
    }
  } catch {
    dispatch({ type: ActionTypeSaveLocationProfileUser.SAVE_LOCATION_PROFILE_USER_ERROR, payload: null})
  }
}

export const rxDeleteAccountUser = (values: IDeleteAccountUserDTO, cb: (isOk: boolean) => void) => async (dispatch: DispatchDeleteAccountUser) => {
  try {
    dispatch({ type: ActionTypeDeleteAccountUser.DELETE_ACCOUNT_USER_START, payload: null})
    const res = await api<IDeleteAccountUserDTO, IDeleteAccountUserDAO>(`${segmentPath}/${values.id}`, { method: 'DELETE' })
    dispatch({ type: ActionTypeDeleteAccountUser.DELETE_ACCOUNT_USER_SUCCESS, payload: res?.record?? null})
    cb(res?.success??false)
  } catch {
    dispatch({ type: ActionTypeDeleteAccountUser.DELETE_ACCOUNT_USER_ERROR, payload: null})
  }
}