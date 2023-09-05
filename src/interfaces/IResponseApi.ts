export interface IResponseApi<T> {
    success: boolean
    message: string
    record?: T
    records?: T[]
}

export interface IResponseApiEncrypt {
    success: boolean
    message: string
    record?: string
    records?: string
}