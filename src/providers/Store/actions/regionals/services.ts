import { ActionTypeGetRegionals, ActionTypeSetRegional } from '@/providers/Store/types/regionals';
import { DispatchGetRegionals, DispatchSetRegional } from './types';
import { IGetRegionalDTO, ISetRegionalDTO } from './dto';
import { IGetRegionalDAO } from './dao';
import { api } from '@/utils/api';

const segmentPath = '/regional'

export const rxGetRegionals = ({ id, cb }: IGetRegionalDTO) => async (dispatch: DispatchGetRegionals) => {
  try {
    dispatch({ type: ActionTypeGetRegionals.GET_REGIONALS_START, payload: []})
    const res = await api<IGetRegionalDTO, IGetRegionalDAO>(`${segmentPath}/${id}`, { method: 'GET' })
    dispatch({ type: ActionTypeGetRegionals.GET_REGIONALS_SUCCESS, payload: res?.records??[] })
    cb && cb(res?.records??[])
  } catch {
    dispatch({ type: ActionTypeGetRegionals.GET_REGIONALS_ERROR, payload: [] })
  }
}

export const rxSetRegional = (payload: ISetRegionalDTO) => (dispatch: DispatchSetRegional) => {
  dispatch({ type: ActionTypeSetRegional.SET_REGIONAL, payload })
}