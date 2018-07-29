import {Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {OwnerComponent} from "./owner/owner.component";
import {SearchComponent} from "./search/search.component";


export const PAGES_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: SearchComponent,
    },
    {
        path: 'owner/:ownerId',
        component: OwnerComponent,
    },
    {
        path: 'about-me',
        component: AboutMeComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
