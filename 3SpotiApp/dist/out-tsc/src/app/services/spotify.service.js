import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
var SpotifyService = /** @class */ (function () {
    function SpotifyService(_http) {
        this._http = _http;
        console.log('Servicio listo de Spotify');
    }
    SpotifyService.prototype.getNewReleases = function () {
        var header = new HttpHeaders({
            'Authorization': 'Bearer BQDvygmFwWIftT8hMfS5p1uMDRrci8etWsVSdbBHBTj0NGLmoZfLUm_Pc0ngkEfyeTRRrWMFKjPow0I-S-0'
        });
        return this._http.get('https://api.spotify.com/v1/browse/new-releases', { headers: header }).pipe(map(function (respuesta) { respuesta['albums'].items; }));
    };
    SpotifyService.prototype.getArtista = function (termino) {
        var header = new HttpHeaders({
            'Authorization': 'Bearer BQDKLegYeyAykqXETEvtKA5hthB7m3fKqL4auwcWdfuMLf5G9gtlOIeC8xQpFtpe8gtoLbsAXKcesjTlWps'
        });
        return this._http.get("https://api.spotify.com/v1/search?q=" + termino + "&type=artist", { headers: header }).pipe(map(function (respuesta) { respuesta['artists'].items; }));
    };
    SpotifyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SpotifyService);
    return SpotifyService;
}());
export { SpotifyService };
//# sourceMappingURL=spotify.service.js.map