import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  artistas:any = [];
  loading : boolean;
  constructor( private _spotify : SpotifyService) { }

   buscar(termino:string){
     console.log(termino);
     this.loading=true;
     this._spotify.getArtistas(termino).subscribe((respuesta : any)=>{
     this.artistas=respuesta;
     this.loading=false;
     //console.log(respuesta.artists.items))
    });
  }
}
