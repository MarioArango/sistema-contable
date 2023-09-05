import type { Dispatch } from 'redux'
import { ActionTypeDeletePhotoProfileUser, ActionTypePhotoProfileUser } from "../../types/files"
import { IDeletePhotoProfileUserDAO, IPhotoProfileUserDAO } from "./dao"

/**
 * ------------------
 * GET PROFILE USER
 * ------------------
 */
export type PhotoProfileUser = {
    type: ActionTypePhotoProfileUser.PHOTO_PROFILE_USER_START | ActionTypePhotoProfileUser.PHOTO_PROFILE_USER_SUCCESS | ActionTypePhotoProfileUser.PHOTO_PROFILE_USER_ERROR,
    payload: IPhotoProfileUserDAO | null
  }
export type DispatchPhotoProfileUser = Dispatch<PhotoProfileUser>

/**
 * --------------------
 * DELETE PROFILE USER
 * --------------------
 */
export type DeletePhotoProfileUser = {
    type: ActionTypeDeletePhotoProfileUser.DELETE_PHOTO_PROFILE_USER_START | ActionTypeDeletePhotoProfileUser.DELETE_PHOTO_PROFILE_USER_SUCCESS | ActionTypeDeletePhotoProfileUser.DELETE_PHOTO_PROFILE_USER_ERROR,
    payload: IDeletePhotoProfileUserDAO | null
  }
export type DispatchDeletePhotoProfileUser = Dispatch<DeletePhotoProfileUser>

//ALL TYPES ACTIONS FILES
export type ActionsFiles = PhotoProfileUser | DeletePhotoProfileUser