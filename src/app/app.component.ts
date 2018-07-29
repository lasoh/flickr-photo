import {Component} from '@angular/core';
import {UiService} from "./ui.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Photo Gallery';
  public loadingData: boolean;
  
  constructor(private uiService: UiService) {
  
  }
  ngOnInit(){
    this.uiService.loading.subscribe((loading) => {
        this.loadingData = loading;
    });
  }
}
