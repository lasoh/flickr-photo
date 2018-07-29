import {IPhoto, iPhotoFromApi} from "./iphoto";
import {IApiGallery} from "./api/iapi-gallery";

export interface IGallery {
    page: number,
    pages: number,
    perpage: number
    total: string,
    photo: IPhoto[]
}

export const iGalleryFromApi = (data: IApiGallery): IGallery=> {
  const res = <IGallery> {
    page: data.page,
    pages: data.pages,
    perpage: data.perpage,
    total: data.total,
    photo: data.photo.map(iPhotoFromApi),
  };
  return res;
};
