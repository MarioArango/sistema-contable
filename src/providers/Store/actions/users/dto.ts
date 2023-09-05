/**
 *---------- 
 * SIGN UP
 * ---------
 */
//VERIFY USER EXIST
export interface IVerifyExistUserDTO {
    email?: string
    phoneNumber?: string
    prefix?: string
}

//SEND CODE USER
export interface ISendCodeUserDTO {
    phoneNumber: string
    prefix: string
}

//VERIFY CODE USER
export interface IVerifyCodeUserDTO {
    phoneNumber: string
    prefix: string
    verifyCode: string
    verifyCodeId: number
}

//SIGN UP TEMP USER
export interface ISignUpTempUserDTO {
    name: string
    lastname: string
    email: string
    language: string
}

//SING UP USER
export interface Policy {
  _id: number
  policieId: number
  accepted: boolean
}

export interface ISignUpUserDTO {
    name: string
    lastname: string
    prefix: string
    phoneNumber: string
    phoneValidated: boolean
    email: string
    password: string
    language: string
    regionalSettingId: number
    timeZone: string
    policies: Policy[],
    validateCode?: string
}

//VERIFY EMAIL AFTER REGISTER
export interface IVerifyEmailUserDTO {
    email?: string
    validateCodeId?: number
    validateCode?: string
    userId?: number
}

/**
 * --------------
 * PROFILE USER
 * --------------
 */

//GET PROFILE USER
export interface IProfileUserDTO {
    id: number
}

//GET PROFILE USER
export interface ISaveProfileUserDTO {
    _id: number
    name: string
    lastname: string
    identityCard?: string
    birthDate?: string
    profession?: string
    avatar?: string
}

//GENERATE CODE PROFILE USER
export interface IGenerateCodeProfileUserDTO {
    email?: string
    phoneNumber?: string
    prefix?: string
}

//VERIFY CODE PROFILE USER
export interface IVerifyCodeProfileUserDTO {
    validationCodeId: number
    validationCode: string
}

//SAVE CONTACT PROFILE USER
export type TypeSaveContact = 'email' | 'phone'
export interface ISaveContactProfileUserDTO {
    email?: string
    phoneNumber?: string
    prefix?: string
}

//SAVE LOCATION PROFILE USER
export interface ISaveLocationProfileUserDTO {
    language: string
    address: string
    city: string
    timeZoneId: number
    regionalSettingId: number
}

//DELETE ACCOUNT USER
export interface IDeleteAccountUserDTO {
    id: number
}