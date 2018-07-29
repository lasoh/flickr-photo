import {IPhoto} from "../iphoto";

export interface IApiGallery {
  page: number,
  pages: number,
  perpage: number
  total: string,
  photo: IPhoto[]
}
