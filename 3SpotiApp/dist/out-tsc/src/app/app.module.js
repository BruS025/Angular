import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
//importar datos desde una api externa https://restcountries.eu
//se usa este import para las peticiones http
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
//ruta importada que cree yo app.routes.ts
import { ROUTES } from './app.routes';
//servicio de spotify
import { SpotifyService } from './services/spotify.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                SearchComponent,
                ArtistaComponent,
                NavbarComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                RouterModule.forRoot(ROUTES, { useHash: true })
            ],
            providers: [SpotifyService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map