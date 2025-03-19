import { Component,inject } from '@angular/core';
import { Albom } from '../app/albom';
import { AlbumsService } from '../albums.service';



@Component({
  selector: 'app-album-detail',
  imports: [],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {

  albumsService: AlbumsService = inject(AlbumsService);
  album: Albom | undefined;

  constructor(){
    
  }

}
