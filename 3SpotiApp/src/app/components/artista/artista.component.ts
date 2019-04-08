import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

artista:any = {};

  constructor(private _activatedRoute : ActivatedRoute,
              private _spotifyService : SpotifyService) {
    this._activatedRoute.params.subscribe(paramas =>{
      this.getArtista(paramas['id']);
    });
   }

   getArtista(id:string){
    this._spotifyService.getArtista(id).subscribe((res : any) =>{
      this.artista = res;
    })
   }

}
