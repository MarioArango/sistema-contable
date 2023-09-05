import { IUserDAO } from "../auth/dao"

//VERIFY USER EXIST
export interface IVerifyExistUserDAO {
    exist: boolean
}

//SEND CODE USER
export interface ISendCodeUserDAO {
    verifyCodeId: number
    expireDateCode: string
}

//VERIFY CODE USER
export interface IVerifyCodeUserDAO {
    verifyCodeId: null
    expireDateCode: null
}

//SIGN UP TEMP USER
export interface ISignUpTempUserDAO {}

//SIGN UP USER
export interface ISignUpUserDAO {
    userId: number
}

//RESET PASSWORD
export interface IVerifyEmailUserDAO {
    validateCodeId: number
    validateCodeExpire: string
}

//GET PROFILE USER
export interface IProfileUserDAO {
    user: IUserDAO
}

//GET PROFILE USER
export interface ISaveProfileUserDAO {}

//GENERATE CODE PROFILE USER
export interface IGenerateCodeProfileUserDAO {
    validationCodeId: number
    validationCodeExpire: string
}

//VERIFY CODE PROFILE USER
export interface IVerifyCodeProfileUserDAO {}

//SAVE CONTACT PROFILE USER
export interface ISaveContactProfileUserDAO {}

//SAVE LOCATION PROFILE USER
export interface ISaveLocationProfileUserDAO {}

//DELETE ACCOUNT USER
export interface IDeleteAccountUserDAO {}