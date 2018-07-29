import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { FlickerService } from "./flicker.service";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import { InfiniteScrollModule} from "ngx-infinite-scroll";
import { UiService} from "./ui.service";
import { MaterialModule} from "./material/material.module";
import { PagesModule} from "./pages/pages.module";
import {NotificationsService} from "./notifications.service";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    InfiniteScrollModule,
    PagesModule
  ],
  providers: [FlickerService,UiService,NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
