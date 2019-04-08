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

   getQuery(query : string){

    const url =`https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQB5x9JAU-V1jgZdZrM9b-LLKpb88lWrChrAlDFIikpHX385bIghygSMoqug-6Mna-oI0pv5OUBlP8rwcqA'
    });

    return this._http.get(url,{headers})
   }

   getNewReleases(){
    
    return this.getQuery('browse/new-releases').pipe(map(respuesta => respuesta['albums'].items));
    // const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQBAkFOnAhRz-ylgdZxszYDHT8QMQmCyPKkkWNP1sa3AMBan3fTROtORvSyAq3tvxTgcHj7Nq0gY4lvcOAM'
    // });

    //return this._http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).pipe(map(respuesta => respuesta['albums'].items));
   }
   getArtistas(termino : string){

    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map(respuesta=> respuesta['artists'].items));
    //  const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQBAkFOnAhRz-ylgdZxszYDHT8QMQmCyPKkkWNP1sa3AMBan3fTROtORvSyAq3tvxTgcHj7Nq0gY4lvcOAM'
    // });

    // return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`,{headers}).pipe(map(respuesta=> respuesta['artists'].items));
   }

   getArtista(id : string){

    return this.getQuery(`artists/${id}`).pipe(map(respuesta=> respuesta['artists'].items));
    //  const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQBAkFOnAhRz-ylgdZxszYDHT8QMQmCyPKkkWNP1sa3AMBan3fTROtORvSyAq3tvxTgcHj7Nq0gY4lvcOAM'
    // });

    // return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`,{headers}).pipe(map(respuesta=> respuesta['artists'].items));
   }
}
