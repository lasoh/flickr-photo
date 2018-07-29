import {IApiPhoto} from "./api/iapi-photo";

export interface IPhoto {
  id: string,
  owner: string,
  secret: string,
  server: string,
  farm: number,
  title: string,
  ispublic: number,
  isfriend: number,
  isfamily: number,
  photoUrl?: string
  description? : IDescription
  dateupload? : string,
  ownername? : string,
  url_m? : string,
  height_m? : string,
  width_m? : string
}
export interface IDescription {
    _content: string
}

export const iPhotoFromApi = (data: IApiPhoto): IPhoto => {
    const res = <IPhoto> {
        id: data.id ,
        owner: data.owner,
        secret: data.secret,
        server: data.server,
        farm: data.farm,
        title: data.title,
        ispublic: data.ispublic,
        isfriend: data.isfriend,
        isfamily: data.isfamily,
        photoUrl : 'https://farm' + data.farm + '.staticflickr.com/' + data.server + '/' + data.id + '_' + data.secret + '.jpg'
    };

    if(data.description){
        res.description = data.description;
    }
    if(data.dateupload){
        res.dateupload = data.dateupload;
    }
    if(data.ownername){
        res.ownername = data.ownername;
    }
    if(data.url_m){
        res.url_m = data.url_m;
        res.height_m = data.height_m;
        res.width_m = data.width_m;
    }
    return res;
};
