import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private _http:HttpClient) {
    console.log('Servicio listo de Spotify')
   }

   getNewReleases(){
    
    const header = new HttpHeaders({
      'Authorization':'Bearer BQBeUSJQ8q37fJfz7PtOnqFlqvRexuVtid3Idl6VTQcQegLABikxDU10R5JHMnWealuMKV-T-KTy51cCh2s'
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases',{headers:header}).pipe(map((respuesta:any [] )=>{ respuesta['albums'].items}))
   }
   getArtista(termino : string){
     const header = new HttpHeaders({
      'Authorization':'Bearer BQBeUSJQ8q37fJfz7PtOnqFlqvRexuVtid3Idl6VTQcQegLABikxDU10R5JHMnWealuMKV-T-KTy51cCh2s'
    });

    return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`,{headers:header}).pipe(map( (respuesta:any[])=>{ respuesta['artists'].items}))
   }
}
