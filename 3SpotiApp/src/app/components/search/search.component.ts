import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  artistas:any = [];
  constructor( private _spotify : SpotifyService) { }

   buscar(termino:string){
     console.log(termino);
     this._spotify.getArtista(termino).subscribe((respuesta : any)=>
     this.artistas=respuesta
     //console.log(respuesta.artists.items))
     );}

}
