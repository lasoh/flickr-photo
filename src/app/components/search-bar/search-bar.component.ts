import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FlickerService} from "../../flicker.service";
import {IGallery} from "../../../interfaces/igallery";
import {NotificationsService} from "../../notifications.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  
  searchService: FlickerService;
  searchString: string = 'Dogs';
  router: Router;
  
  constructor(flickerService: FlickerService, public notificationSerice: NotificationsService) {
    this.searchService = flickerService;
  }
  
  public ngOnInit() {
    this.search();
  }
  
  
  search() {
    
    if (this.searchString.length == 0) {
      this.notificationSerice.notify('Add some text to serach', '');
      return;
    }
    let searchResult: Promise<IGallery> = this.searchService.search(this.searchString);
  }

}
