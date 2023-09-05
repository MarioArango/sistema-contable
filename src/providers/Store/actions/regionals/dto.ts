import { IGetRegionalDAO } from "./dao"

export interface IGetRegionalDTO {
  id?: number
  cb?: (data: IGetRegionalDAO[] | []) => void
}

export interface ISetRegionalDTO extends IGetRegionalDAO {}
    