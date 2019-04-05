import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
var SearchComponent = /** @class */ (function () {
    function SearchComponent(_spotify) {
        this._spotify = _spotify;
        this.artistas = [];
    }
    SearchComponent.prototype.buscar = function (termino) {
        var _this = this;
        console.log(termino);
        this._spotify.getArtista(termino).subscribe(function (respuesta) {
            return _this.artistas = respuesta;
        }
        //console.log(respuesta.artists.items))
        );
    };
    SearchComponent = tslib_1.__decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [SpotifyService])
    ], SearchComponent);
    return SearchComponent;
}());
export { SearchComponent };
//# sourceMappingURL=search.component.js.map