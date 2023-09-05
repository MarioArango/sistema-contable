//GET CODE AUTH
export interface IGetCodeAuthDAO {
    validateCodeId: number
    validateCodeExpire: string
}

/**
 * --------
 * SIGN IN
 * --------
 */
export interface IAuthSignInDAO {
    token: string
    user: string
}
export interface IUserDAO {
    _id: number;
    name: string
    lastname: string
    userType: 'A' | 'C'
    prefix: string
    phoneNumber: string
    validatedPhone: boolean
    email: string
    validatedEmail: boolean
    password: string | null
    language: string
    avatar: string | null
    activeSessions: number
    subscriptions: IUserSubscriptionDAO[]
    roles: IUserRolesDAO[]
    permits: string[],
    regionalSettings: IUserRegionalSettingsDAO,
    timeZone: IUserTimeZoneDAO,
    hash: string,
    numberActiveSessionsAllowed: number
    identityCard: string | null
    birthDate: string | null
    profession: string | null
    city: string | null
    address: string | null
    gender: 'M' | 'F' | 'O'
}
export interface IUser extends Readonly<Omit<IUserDAO, 'subscriptions' | 'roles' | 'permits' | 'regionalSettings' | 'timeZone'>>{}

export interface IUserSubscriptionDAO {
    _id: number | null
    userId: number
    startDate: string
    endDate: string
    status: 'A' | 'C'
    isAutomaticRenewal: boolean
    isActive: boolean
    name: string
    description: string
    numberOptimizations: number
    numberProjects: number
    allowsMail: boolean
    allowsLogo: boolean
}
export interface ISuscription extends Readonly<IUserSubscriptionDAO>{}

export interface IUserRolesDAO {
    _id: number
    name: string
    permits: string[]
    isAdmin: boolean
}
export interface IRoles extends Readonly<IUserRolesDAO>{}

export interface IUserRegionalSettingsDAO {
    _id: number | null
    countryName: string | null
    countryCode: string | null
    currencyName: string | null
    currencyCode: string | null
    currencySymbol: string | null
    dateFormat: string | null
    timeFormat: string | null
    flagUrl: string | null
    prefix: string | null
    defaultLanguage: string | null
}
export interface IRegionalSettings extends Readonly<IUserRegionalSettingsDAO>{}

export interface IUserTimeZoneDAO {
    _id: number | null
    timeZone: string | null
    UTC: string | null
    hoursDifferenceUTC: number | null
    isSummerTime: boolean | null
}
export interface ITimeZone extends Readonly<IUserTimeZoneDAO>{}

/**
 * ----------------
 * FORGOT PASSWORD
 * ----------------
 */
export interface IGetCodeForgotPassDAO {
    token?: string
    validationCodeExpire?: string
}

/**
 * ----------------
 * RESET PASSWORD
 * ----------------
 */
export interface IResetPasswordDAO {}