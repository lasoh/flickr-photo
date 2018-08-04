export interface IApiPhoto {
  id: string,
  owner: string,
  secret: string,
  server: string,
  farm: number,
  title: string,
  ispublic: number,
  isfriend: number,
  isfamily: number,
  description? : IApiDescription,
  dateupload? : number,
  ownername? : string,
  url_m? : string,
  height_m? : string,
  width_m? : string
}

export interface IApiDescription{
  _content: string
}
