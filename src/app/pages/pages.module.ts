import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PAGES_ROUTES} from "./pages.routes";
import {MaterialModule} from "../material/material.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {SearchBarComponent} from "../components/search-bar/search-bar.component";
import {PhotoCardComponent} from "../components/photo-card/photo-card.component";
import {PhotosComponent} from "../components/photos/photos.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {OwnerComponent} from "./owner/owner.component";
import {SearchComponent as SEARCH_PAGE} from "./search/search.component";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        MaterialModule,
        InfiniteScrollModule,
        RouterModule.forRoot(PAGES_ROUTES)
    ],
    exports: [RouterModule],
    declarations: [
        SearchBarComponent,
        PhotoCardComponent,
        PhotosComponent,
        AboutMeComponent,
        NotFoundComponent,
        OwnerComponent,
        SEARCH_PAGE
    ]
})
export class PagesModule {
}
