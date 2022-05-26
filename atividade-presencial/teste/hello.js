"use strict";
exports.__esModule = true;
exports.Ponto_A = void 0;
var Ponto_A = /** @class */ (function () {
    /* Métodos */
    /* Método Construtor */
    function Ponto_A(id, codigo) {
        this.id = id;
        this.codigo = codigo;
    }
    /* Métodos Acessores */
    Ponto_A.prototype.getid = function () {
        return this.id;
    };
    Ponto_A.prototype.getcodigo = function () {
        return this.codigo;
    };
    Ponto_A.prototype.setcodigo = function (codigo) {
        this.codigo = codigo;
    };
    Ponto_A.prototype.pertenceArea = function () {
        if (this.getid() < 3 && this.getcodigo() <= 5) {
            console.log("Pertence");
        }
    };
    return Ponto_A;
}());
exports.Ponto_A = Ponto_A;
