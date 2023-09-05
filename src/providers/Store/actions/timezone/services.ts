import { IGetTimezonesDTO } from "./dto"
import { IGetTimezonesDAO } from "./dao"
import { DispatchGetTimezones } from "./types"
import { ActionTypeGetTimezones } from "../../types/timezone"
import { api } from "@/utils/api"

const segmentPath = '/time-zones'

export const rxGetTimezones = (values: IGetTimezonesDTO, cb?: (data: IGetTimezonesDAO | null) => void) => async (dispatch: DispatchGetTimezones) => {
    try {
      dispatch({ type: ActionTypeGetTimezones.GET_TIMEZONES_START, payload: []})
      const url = values?.id? `${segmentPath}/${values.id}` : segmentPath
      const res = await api<IGetTimezonesDTO, IGetTimezonesDAO>(url, { method: 'GET' })
      dispatch({ type: ActionTypeGetTimezones.GET_TIMEZONES_SUCCESS, payload: res?.records??[] })
      cb && cb(res?.records??[])
    } catch {
      dispatch({ type: ActionTypeGetTimezones.GET_TIMEZONES_ERROR, payload: [] })
    }
  }