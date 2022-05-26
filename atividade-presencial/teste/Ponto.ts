export class Ponto {
    PontoX: number;
    PontoY: number;

    constructor (PontoX: number, PontoY: number) {
        this.PontoX = PontoX;
        this.PontoY = PontoY;

    }

    /* Métodos Acessores */
    getPontoX (): number {
        return this.PontoX;
    }

    getPontoY (): number {
        return this.PontoY;
    }
}

let teste = new Ponto(12, 13);