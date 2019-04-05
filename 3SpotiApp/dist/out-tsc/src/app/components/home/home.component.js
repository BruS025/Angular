import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(spotify) {
        var _this = this;
        this.spotify = spotify;
        this.nuevasCanciones = [];
        this.spotify.getNewReleases().subscribe(function (respuesta) {
            _this.nuevasCanciones = respuesta;
            console.log(respuesta);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [SpotifyService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map