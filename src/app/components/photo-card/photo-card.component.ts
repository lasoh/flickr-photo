import {Component, Input, OnInit} from '@angular/core';
import {IPhoto} from "../../../interfaces/iphoto";
import {DomSanitizer, SafeResourceUrl, SafeStyle} from "@angular/platform-browser";

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  private _value : IPhoto;
  private _photoUrl: SafeStyle;
  
  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  
  }
  
  get value(): IPhoto {
    return this._value;
  }
  get photoUrl(): SafeStyle {
    return this._photoUrl;
  }
  
  @Input()
  set value(value: IPhoto) {
    this._value = value;
    this._photoUrl = this.sanitizer.bypassSecurityTrustStyle('url(' + this.value.url_m + ')');
  }
}
