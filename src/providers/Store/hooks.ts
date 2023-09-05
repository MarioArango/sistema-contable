import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
//-----------------------------------------------all type dtos---alltypes dispatch<typeModule>---------------------
export const useAppDispatch: (() => AppDispatch | ((data: any) => (dispatch: any) => Promise<void>)) = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector