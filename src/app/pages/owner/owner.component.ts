import { Component, OnInit } from '@angular/core';
import {FlickerService} from "../../flicker.service";
import {ActivatedRoute} from "@angular/router";
import {IOwner} from "../../../interfaces/iowner";

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  
  private _ownerId: string;
  public ownerData: IOwner;
  
  
  constructor(private flickerService: FlickerService, private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params['ownerId']){
          this._ownerId = params['ownerId'];
          this.loadOwnerData();
        }
      }
    );
  }
  
  loadOwnerData(){
      this.flickerService.ownerInfo(this._ownerId).then(owner => {
        this.ownerData = owner;
        this.flickerService.ownerPhoto(this._ownerId);
      }, error => {})
  }
  
}
