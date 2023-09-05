//GET CODE AUTH
export interface IGetCodeAuthDTO {
    phoneNumber?: string
    prefix?: string
    validateCodeId?: number,
    validateCode?: string
}

//SIGN IN
export type TypeValidate = 'phone' | 'email'

export interface UserTracker {
    ip?: string
    browser?: string
    device?: string
    coordinates?: string
}

export interface IAuthSignInPhoneDTO extends UserTracker {
    prefix?: string
    phoneNumber?: string
    validationCode?: string
}

export interface IAuthSignInEmailDTO extends UserTracker{
    email?: string
    password?: string
}

//FORGOT PASSWORD
export type TypeValidateForgot = 'sendCode' | 'validationCode'
export interface IGetCodeForgotPassDTO {
    email?: string
    token?: string
    validationCode?: string
}

//RESET PASSWORD
export interface IResetPasswordDTO {
  email: string
  password: string
  token: string
  ip: string
  browser: string
  device: string
}