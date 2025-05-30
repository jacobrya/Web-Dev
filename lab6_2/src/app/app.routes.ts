import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { AlbumComponent } from '../album/album.component';

export const routes: Routes = [
    {
        path: '',component: HomeComponent,
    },
    {
        path: 'about',component: AboutComponent,
    },
    {
        path: 'album',component: AlbumComponent,
    }
];
