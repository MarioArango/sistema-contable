import { ActionTypeGetPolicies } from '@/providers/Store/types/policies'
import { DispatchGetPolicies } from './type'
import { IGetPoliciesDTO } from './dto'
import { IGetPoliciesDAO } from './dao'
import { api } from '@/utils/api'

const segmentPath = '/policies'

export const rxGetPolicies = (values: IGetPoliciesDTO) => async (dispatch: DispatchGetPolicies) => {
  try {
    dispatch({ type: ActionTypeGetPolicies.GET_POLICIES_START, payload: []})
    const res = await api<IGetPoliciesDTO, IGetPoliciesDAO>(`${segmentPath}/list`, { data: values })
    dispatch({ type: ActionTypeGetPolicies.GET_POLICIES_SUCCESS, payload: res?.records??[] })
  } catch {
    dispatch({ type: ActionTypeGetPolicies.GET_POLICIES_ERROR, payload: [] })
  }
}