import { api } from "@/utils/api"
import { ActionTypeDeletePhotoProfileUser, ActionTypePhotoProfileUser } from "../../types/files"
import { IDeletePhotoProfileUserDAO, IPhotoProfileUserDAO } from "./dao"
import { IDeletePhotoProfileUserDTO, IPhotoProfileUserDTO } from "./dto"
import { DispatchDeletePhotoProfileUser, DispatchPhotoProfileUser } from "./types"
import { showMessage } from "@/utils/helpers/onlyClient"

const segmentPath = '/files'

export const rxGetPhotoProfileUser = (values: IPhotoProfileUserDTO, cb?: (data: IPhotoProfileUserDAO | null) => void) => async (dispatch: DispatchPhotoProfileUser) => {
  try {
    dispatch({ type: ActionTypePhotoProfileUser.PHOTO_PROFILE_USER_START, payload: null})
    const res = await api<IPhotoProfileUserDTO, IPhotoProfileUserDAO>(`${segmentPath}/upload`, { data: values })
    dispatch({ type: ActionTypePhotoProfileUser.PHOTO_PROFILE_USER_SUCCESS, payload: res?.record?? null})
    cb && cb(res?.record??null)
  } catch {
    dispatch({ type: ActionTypePhotoProfileUser.PHOTO_PROFILE_USER_ERROR, payload: null})
  }
}

export const rxDeletePhotoProfileUser = (values: IDeletePhotoProfileUserDTO, cb?: (data: IDeletePhotoProfileUserDAO | null) => void) => async (dispatch: DispatchDeletePhotoProfileUser) => {
  try {
    dispatch({ type: ActionTypeDeletePhotoProfileUser.DELETE_PHOTO_PROFILE_USER_START, payload: null})
    const res = await api<IDeletePhotoProfileUserDTO, IDeletePhotoProfileUserDAO>(`${segmentPath}/delete`, { data: values })
    dispatch({ type: ActionTypeDeletePhotoProfileUser.DELETE_PHOTO_PROFILE_USER_SUCCESS, payload: res?.record?? null})
    showMessage(res?.message??'')
    cb && cb(res?.record??null)
  } catch {
    dispatch({ type: ActionTypeDeletePhotoProfileUser.DELETE_PHOTO_PROFILE_USER_ERROR, payload: null})
  }
}