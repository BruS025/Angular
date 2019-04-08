import { Component, OnInit } from '@angular/core';
//es lo mismo que el HttpClientModule solo que le cambie el nombre pero trae todo lo mismo
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

  nuevasCanciones : any [] =[];

  loading : boolean;
  constructor(private spotify :SpotifyService) { 

    this.loading=true;
    this.spotify.getNewReleases().subscribe((respuesta : any )=>{
     this.nuevasCanciones=respuesta;
     this.loading=false;
     console.log(respuesta);
    });
    
    }
  ngOnInit() {
  }

}
