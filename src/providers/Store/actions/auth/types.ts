import type { Dispatch } from 'redux'
import { IAuthSignInDAO, IGetCodeAuthDAO, IGetCodeForgotPassDAO, IResetPasswordDAO, IUserDAO } from "./dao";
import { ActionTypeGetCodeAuth, ActionTypeGetCodeForgotPass, ActionTypeResetPassword, ActionTypeSignIn, ActionTypeUpdateDataUser } from '../../types/auth';

/**
 * -----------------------
 * GET CODE AUTH
 * -----------------------
 */
export type GetCodeAuth = {
  type: ActionTypeGetCodeAuth.GET_CODE_AUTH_START | ActionTypeGetCodeAuth.GET_CODE_AUTH_SUCCESS | ActionTypeGetCodeAuth.GET_CODE_AUTH_ERROR,
  payload: IGetCodeAuthDAO | null
}
export type DispatchGetCodeAuth = Dispatch<GetCodeAuth>

/**
 * -----------------------
 * SIGN IN USER
 * -----------------------
 */
export type AuthSignIn = {
  type: ActionTypeSignIn.AUTH_USER_START | ActionTypeSignIn.AUTH_USER_SUCCESS | ActionTypeSignIn.AUTH_USER_ERROR,
  payload: IAuthSignInDAO | null
}
export type DispatchAuthSignIn = Dispatch<AuthSignIn>

/**
 * -----------------
 * UPDATE DATA USER
 * -----------------
 */
export type UpdateDataUser = {
  type: ActionTypeUpdateDataUser.UPDATE_DATA_USER,
  payload: IUserDAO | null
}
export type DispatchUpdateDataUser = Dispatch<UpdateDataUser>

/**
 * -------------------------
 * GET CODE FORGOT PASSWORD
 * -------------------------
 */
export type GetCodeForgotPass = {
  type: ActionTypeGetCodeForgotPass.GET_CODE_FORGOT_PASS_START | ActionTypeGetCodeForgotPass.GET_CODE_FORGOT_PASS_SUCCESS | ActionTypeGetCodeForgotPass.GET_CODE_FORGOT_PASS_ERROR,
  payload: IGetCodeForgotPassDAO | null
}
export type DispatchGetCodeForgotPass = Dispatch<GetCodeForgotPass>

/**
 * -------------------------
 * GET CODE FORGOT PASSWORD
 * -------------------------
 */
export type ResetPassword = {
  type: ActionTypeResetPassword.RESET_PASSWORD_START | ActionTypeResetPassword.RESET_PASSWORD_SUCCESS | ActionTypeResetPassword.RESET_PASSWORD_ERROR,
  payload: IResetPasswordDAO | null
}
export type DispatchResetPassword = Dispatch<ResetPassword>

/**
 * -------------
 * 
 * -------------
 */

//ALL TYPES ACTIONS AUTH
export type ActionsAuth = GetCodeAuth | AuthSignIn | UpdateDataUser | GetCodeForgotPass | ResetPassword