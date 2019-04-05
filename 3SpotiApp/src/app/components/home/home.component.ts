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

  nuevasCanciones : any[] = [];

  constructor(private spotify :SpotifyService) { 

    this.spotify.getNewReleases().subscribe((respuesta:any)=>{
     this.nuevasCanciones=respuesta
     console.log(respuesta);
    });
    
    }
  

  ngOnInit() {
  }

}
