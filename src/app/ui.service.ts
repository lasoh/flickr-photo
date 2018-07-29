import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UiService{
  
  public loading = new BehaviorSubject(false);
  
  constructor() {
  
  }
  
}
