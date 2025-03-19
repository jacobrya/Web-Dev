import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { AlbumComponent } from '../album/album.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,AboutComponent,AlbumComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab6_2';
}
