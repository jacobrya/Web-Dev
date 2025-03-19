import { Component,Input,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Albom } from '../app/albom';
import { AlbumsService } from '../albums.service';


@Component({
  selector: 'app-album',
  imports: [CommonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  albumList: Albom[] = [];

  @Input() albom!: Albom;

  housingService: AlbumsService = inject(AlbumsService);

  constructor(){
    this.albumList = this.housingService.getAlbums();
  }
}
