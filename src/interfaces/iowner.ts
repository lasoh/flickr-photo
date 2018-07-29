import {IApiOwner} from "./api/iapi-owner";

export interface IOwner {
    realname: string,
    username: string,
    photosCount: number
    id  : string,
}

export const iOwnerFromApi = (data: IApiOwner): IOwner => {
  const res = <IOwner> {
    realname: data.realname._content,
    username: data.username._content,
    photosCount: data.photos.count._content,
    id: data.id
  };
  return res;
};
