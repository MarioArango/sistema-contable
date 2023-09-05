import type { Dispatch } from 'redux'
import { ActionTypeDeleteAccountUser, ActionTypeGenerateCodeProfileUser, ActionTypeProfileUser, ActionTypeSaveContactProfileUser, ActionTypeSaveLocationProfileUser, ActionTypeSaveProfileUser, ActionTypeSendCodeUser, ActionTypeSignUpTempUser, ActionTypeSignUpUser, ActionTypeVerifyCodeProfileUser, ActionTypeVerifyCodeUser, ActionTypeVerifyEmailUser, ActionTypeVerifyExistUser } from '@/redux/types/users'
import { IDeleteAccountUserDAO, IGenerateCodeProfileUserDAO, IProfileUserDAO, ISaveContactProfileUserDAO, ISaveLocationProfileUserDAO, ISaveProfileUserDAO, ISendCodeUserDAO, ISignUpUserDAO, IVerifyCodeProfileUserDAO, IVerifyEmailUserDAO, IVerifyExistUserDAO } from './dao'

/**
 * ------------------
 * VERIFY USER EXIST
 * ------------------
 */

export type VerifyUserExist = {
  type: ActionTypeVerifyExistUser.VERIFY_EXIST_USER_START | ActionTypeVerifyExistUser.VERIFY_EXIST_USER_SUCCESS | ActionTypeVerifyExistUser.VERIFY_EXIST_USER_ERROR,
  payload: IVerifyExistUserDAO | null
}
export type DispatchVerifyExistUser = Dispatch<VerifyUserExist>

/**
 * -----------------
 * SEND CODE USER
 * -----------------
 */

export type SendCodeUser = {
  type: ActionTypeSendCodeUser.SEND_CODE_USER_START | ActionTypeSendCodeUser.SEND_CODE_USER_SUCCESS | ActionTypeSendCodeUser.SEND_CODE_USER_ERROR,
  payload: ISendCodeUserDAO | null
}
export type DispatchSendCodeUser = Dispatch<SendCodeUser>

/**
 * -----------------
 * VERIFY CODE USER
 * -----------------
 */

export type VerifyCodeUser = {
  type: ActionTypeVerifyCodeUser.VERIFY_CODE_USER_START | ActionTypeVerifyCodeUser.VERIFY_CODE_USER_SUCCESS | ActionTypeVerifyCodeUser.VERIFY_CODE_USER_ERROR,
  payload?: boolean
}
export type DispatchVerifyCodeUser = Dispatch<VerifyCodeUser>

/**
 * -----------------
 * SIGNUP TEMP USER
 * -----------------
 */

export type SignUpTempUser = {
  type: ActionTypeSignUpTempUser.SIGNUP_TEMP_USER_START | ActionTypeSignUpTempUser.SIGNUP_TEMP_USER_SUCCESS | ActionTypeSignUpTempUser.SIGNUP_TEMP_USER_ERROR,
  payload: null
}
export type DispatchSignUpTempUser = Dispatch<SignUpTempUser>

/**
 * -------------
 * SIGNUP USER
 * -------------
 */

export type SignUpUser = {
  type: ActionTypeSignUpUser.SIGNUP_USER_START | ActionTypeSignUpUser.SIGNUP_USER_SUCCESS | ActionTypeSignUpUser.SIGNUP_USER_ERROR,
  payload: ISignUpUserDAO | null
}
export type DispatchSignUpUser = Dispatch<SignUpUser>

/**
 * ------------------
 * VERIFY EMAIL USER
 * ------------------
 */
export type VerifyEmailUser = {
  type: ActionTypeVerifyEmailUser.VERIFY_EMAIL_USER_START | ActionTypeVerifyEmailUser.VERIFY_EMAIL_USER_SUCCESS | ActionTypeVerifyEmailUser.VERIFY_EMAIL_USER_ERROR,
  payload: IVerifyEmailUserDAO | null
}
export type DispatchVerifyEmailUser = Dispatch<VerifyEmailUser>

/**
 * ------------------
 * GET PROFILE USER
 * ------------------
 */
export type ProfileUser = {
  type: ActionTypeProfileUser.PROFILE_USER_START | ActionTypeProfileUser.PROFILE_USER_SUCCESS | ActionTypeProfileUser.PROFILE_USER_ERROR,
  payload: IProfileUserDAO | null
}
export type DispatchProfileUser = Dispatch<ProfileUser>

/**
 * ------------------
 * SAVE PROFILE USER
 * ------------------
 */
export type SaveProfileUser = {
  type: ActionTypeSaveProfileUser.SAVE_PROFILE_USER_START | ActionTypeSaveProfileUser.SAVE_PROFILE_USER_SUCCESS | ActionTypeSaveProfileUser.SAVE_PROFILE_USER_ERROR,
  payload: ISaveProfileUserDAO | null
}
export type DispatchSaveProfileUser = Dispatch<SaveProfileUser>

/**
 * ----------------------------
 * GENERATE CODE PROFILE USER
 * ----------------------------
 */
export type GenerateCodeProfileUser = {
  type: ActionTypeGenerateCodeProfileUser.GENERATE_CODE_PROFILE_USER_START | ActionTypeGenerateCodeProfileUser.GENERATE_CODE_PROFILE_USER_SUCCESS | ActionTypeGenerateCodeProfileUser.GENERATE_CODE_PROFILE_USER_ERROR,
  payload: IGenerateCodeProfileUserDAO | null
}
export type DispatchGenerateCodeProfileUser = Dispatch<GenerateCodeProfileUser>

/**
 * --------------------------
 * VERIFY CODE PROFILE USER
 * --------------------------
 */
export type VerifyCodeProfileUser = {
  type: ActionTypeVerifyCodeProfileUser.VERIFY_CODE_PROFILE_USER_START | ActionTypeVerifyCodeProfileUser.VERIFY_CODE_PROFILE_USER_SUCCESS | ActionTypeVerifyCodeProfileUser.VERIFY_CODE_PROFILE_USER_ERROR,
  payload: IVerifyCodeProfileUserDAO | null
}
export type DispatchVerifyCodeProfileUser = Dispatch<VerifyCodeProfileUser>

/**
 * --------------------------
 * SAVE CONTACT PROFILE USER
 * --------------------------
 */
export type SaveContactProfileUser = {
  type: ActionTypeSaveContactProfileUser.SAVE_CONTACT_PROFILE_USER_START | ActionTypeSaveContactProfileUser.SAVE_CONTACT_PROFILE_USER_SUCCESS | ActionTypeSaveContactProfileUser.SAVE_CONTACT_PROFILE_USER_ERROR,
  payload: ISaveContactProfileUserDAO | null
}
export type DispatchSaveContactProfileUser = Dispatch<SaveContactProfileUser>

/**
 * ---------------------------
 * SAVE LOCATION PROFILE USER
 * ---------------------------
 */
export type SaveLocationProfileUser = {
  type: ActionTypeSaveLocationProfileUser.SAVE_LOCATION_PROFILE_USER_START | ActionTypeSaveLocationProfileUser.SAVE_LOCATION_PROFILE_USER_SUCCESS | ActionTypeSaveLocationProfileUser.SAVE_LOCATION_PROFILE_USER_ERROR,
  payload: ISaveLocationProfileUserDAO | null
}
export type DispatchSaveLocationProfileUser = Dispatch<SaveLocationProfileUser>

/**
 * --------------------
 * DELETE ACCOUNT USER
 * --------------------
 */
export type DeleteAccountUser = {
  type: ActionTypeDeleteAccountUser.DELETE_ACCOUNT_USER_START | ActionTypeDeleteAccountUser.DELETE_ACCOUNT_USER_SUCCESS | ActionTypeDeleteAccountUser.DELETE_ACCOUNT_USER_ERROR,
  payload: IDeleteAccountUserDAO | null
}
export type DispatchDeleteAccountUser = Dispatch<DeleteAccountUser>


//ALL TYPES ACTIONS USER
export type ActionsUser = VerifyUserExist | SendCodeUser | VerifyCodeUser | SignUpTempUser | SignUpUser | VerifyEmailUser | ProfileUser  | SaveProfileUser | GenerateCodeProfileUser | VerifyCodeProfileUser | SaveContactProfileUser | SaveLocationProfileUser
                          | DeleteAccountUser