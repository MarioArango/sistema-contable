import { api } from "@/utils/api"
import { ActionTypeCloseSession } from "../../types/session"
import { ICloseSessionDAO } from "./dao"
import { ICloseSessionDTO } from "./dto"
import { DispatchCloseSession } from "./types"

const segmentPath = '/session'

export const rxCloseSession = (values: ICloseSessionDTO, cb: () => void) => async (dispatch: DispatchCloseSession) => {
  try {
    dispatch({ type: ActionTypeCloseSession.CLOSE_SESSION_START, payload: null})
    const res = await api<ICloseSessionDTO, ICloseSessionDAO>(`${segmentPath}/logout`, { data: values })
    dispatch({ type: ActionTypeCloseSession.CLOSE_SESSION_SUCCESS, payload: null })
    if(res?.success){
      cb()
    }
  } catch {
    dispatch({ type: ActionTypeCloseSession.CLOSE_SESSION_ERROR, payload: null })
  }
}