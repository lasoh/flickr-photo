import { Injectable } from '@angular/core';
import {IGallery} from "../interfaces/igallery";
import {environment} from "../environments/environment";
import {apiUrl} from "../helpers/api";
import {HttpClient} from "@angular/common/http";
import {IPhoto, iPhotoFromApi} from "../interfaces/iphoto";
import {Subject} from "rxjs/Subject";
import {UiService} from "./ui.service";
import {IOwner, iOwnerFromApi} from "../interfaces/iowner";
import {IApiOwner} from "../interfaces/api/iapi-owner";
import {NotificationsService} from "./notifications.service";

@Injectable()
export class FlickerService {
  
  _searchText: string;
  _currentPage: number = 1;
  _ownerId: string;
  
  _photos: IPhoto[] = [];
  
  public photos = new Subject<IPhoto[]>();
  public loading = new Subject<boolean>();
  
  
  constructor(private http: HttpClient,private uiService: UiService, public notification:NotificationsService) {
  }
  
  search(searchText?): Promise<IGallery> {
    this.uiService.loading.next(true);
    if (searchText){
        this.resetSearch(searchText);
    }

    return new Promise<IGallery>((resolve, reject) => {
      
      this.http.get(apiUrl(), {
        params: {
          method: 'flickr.photos.search',
          format: 'json',
          per_page: '100',
          page: this._currentPage.toString(),
          api_key: environment.flicker.key,
          text: this._searchText,
          nojsoncallback: '1',
          extras: 'owner_name,url_m,description,date_upload'
        }
      }).subscribe((res: any) => {
        const gallery : IGallery = res.photos;
        if (gallery) {
          this._photos = this._photos.concat(gallery.photo.map(iPhotoFromApi));
          this.photos.next(this._photos);
          this.uiService.loading.next(false);
          this._currentPage++;
          resolve();
        } else {
          this.notification.notify(res.message, 'error');
          reject();
        }
        
      }, res => {
        this.notification.notify(res.message, 'error');
        reject()
      });
    });
  }
  
  ownerInfo(ownerId): Promise<IOwner> {
    
    return new Promise<IOwner>((resolve, reject) => {
      
      this.http.get(apiUrl(), {
        params: {
          method: 'flickr.people.getInfo',
          api_key: environment.flicker.key,
          format: 'json',
          user_id: ownerId,
          nojsoncallback: '1'
        }
      }).subscribe((res: any) => {
        const owner : IApiOwner = res.person;
        if (owner) {
            resolve(iOwnerFromApi(owner));
          } else {
            this.notification.notify(res.message, 'error');
            reject();
        }
        
      }, res => {
        this.notification.notify(res.message, 'error');
        reject()
      });
    });
  }
  ownerPhoto( ownerId?:string ): Promise<IGallery> {
    if (ownerId){
      this._ownerId = ownerId;
    }
    this.uiService.loading.next(true);
    return new Promise<IGallery>((resolve, reject) => {
      
      this.http.get(apiUrl(), {
        params: {
          method: 'flickr.people.getPhotos',
          format: 'json',
          per_page: '100',
          page: this._currentPage.toString(),
          api_key: environment.flicker.key,
          user_id: this._ownerId,
          nojsoncallback: '1',
          extras: 'owner_name,url_m,description,date_upload'
        }
      }).subscribe((res: any) => {
        const gallery : IGallery = res.photos;
        if (gallery) {
          this._photos = this._photos.concat(gallery.photo.map(iPhotoFromApi));
          this.photos.next(this._photos);
          this.uiService.loading.next(false);
          this._currentPage++;
          resolve();
        } else {
          this.notification.notify(res.message, 'error');
          reject();
        }
        
      }, res => {
        this.notification.notify(res.message, 'error');
        reject();
      });
    });
  }
  
  
  resetSearch(searchText: string){
    
    if (searchText !== this._searchText){
        this._searchText = searchText;
        this._photos = [];
        this._currentPage = 1;
    }
  }
}
