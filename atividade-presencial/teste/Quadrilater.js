"use strict";
exports.__esModule = true;
exports.Ponto_AB = void 0;
var Ponto_AB = /** @class */ (function () {
    /* Métodos */
    /* Método Construtor */
    function Ponto_AB(PontoA, PontoB) {
        this.PontoA = PontoA;
        this.PontoB = PontoB;
    }
    /* Métodos Acessores */
    Ponto_AB.prototype.getPontoA = function () {
        return this.PontoA;
    };
    Ponto_AB.prototype.getPontoB = function () {
        return this.PontoB;
    };
    Ponto_AB.prototype.pertenceArea = function () {
        if (this.getPontoA() < 3 && this.getPontoB() <= 5) {
            console.log("Pertence");
        }
    };
    return Ponto_AB;
}());
exports.Ponto_AB = Ponto_AB;
