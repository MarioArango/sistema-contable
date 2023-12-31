export enum ActionTypeGetCodeAuth {
    GET_CODE_AUTH_START = 'GET_CODE_AUTH_START',
    GET_CODE_AUTH_SUCCESS = 'GET_CODE_AUTH_SUCCESS',
    GET_CODE_AUTH_ERROR = 'GET_CODE_AUTH_ERROR'
}

export enum ActionTypeSignIn {
    AUTH_USER_START = 'AUTH_USER_START',
    AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS',
    AUTH_USER_ERROR = 'AUTH_USER_ERROR'
}

export enum ActionTypeUpdateDataUser {
    UPDATE_DATA_USER = 'UPDATE_DATA_USER',
}

export enum ActionTypeGetCodeForgotPass {
    GET_CODE_FORGOT_PASS_START = 'GET_CODE_FORGOT_PASS_START',
    GET_CODE_FORGOT_PASS_SUCCESS = 'GET_CODE_FORGOT_PASS_SUCCESS',
    GET_CODE_FORGOT_PASS_ERROR = 'GET_CODE_FORGOT_PASS_ERROR'
}

export enum ActionTypeResetPassword {
    RESET_PASSWORD_START = 'RESET_PASSWORD_START',
    RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS',
    RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR'
}