import { backendURL } from "../config"
import { showMessage } from "../helpers/onlyClient"
import { getLocalStorage } from "../helpers/onlyClient"
import { AuthUser } from "@/providers/Store/reducers/auth"
import { IUser } from "@/providers/Store/actions/auth/dao"
import { IResponseApi, IResponseApiEncrypt } from "@/interfaces/IResponseApi"
import { RegionalParams } from "@/providers/Store/reducers/regionals"
import { ISetRegionalDTO } from "@/providers/Store/actions/regionals/dto"
import { decrypt } from "../helpers"

interface IOptionsFetch<T> {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    cache?: 'force-cache' | 'no-store'
    mode?: 'cors'
    headers?: {
        "Content-type": "application/json"
        "Authorization": string
    }
    responseType?: 'text' | 'json' | 'blob' | 'arrayBuffer' | 'document'
    data?: T
    body?: string
    hasEncrypt?: boolean
}

export const api = async <IDTO, IDAO>(url: string, options?: IOptionsFetch<IDTO>) => {

    const configUrl = {
        host: backendURL,
        prefix: 'api',
        version: 'v1'
    }

    const URL = `${configUrl.host}/${configUrl.prefix}/${configUrl.version}${url}`

    const authToken = getLocalStorage<string>(AuthUser.TOKEN, false)?? ''
    const hasEncrypt = options?.hasEncrypt?? false

    const initialOptions: IOptionsFetch<IDTO> = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            "Content-type": "application/json",
            "Authorization": 'Bearer ' + authToken,
        },
        responseType: 'json',
        body: JSON.stringify(options?.data??[]),
        hasEncrypt: false,
        ...options
    }
    if(options?.data){
        delete initialOptions.data
    }
    if(options?.hasEncrypt){
        delete initialOptions.hasEncrypt
    }
    if(options?.method === 'GET' || options?.method === 'DELETE'){
        delete initialOptions.body
    }

    try {
        const response = await fetch(URL, initialOptions)
        if(hasEncrypt){
            const result = await response.json() as IResponseApiEncrypt
            const record = decrypt(result.record??'')
            const records = decrypt(result.records??'')
            return {
                ...result,
                record,
                records
            }
        }else {
            const result = await response.json() as IResponseApi<IDAO>
            return result
        }
    } catch (error: object | any) {
        showMessage(error?.response?.message?? '', 'error', 4)
    }
}