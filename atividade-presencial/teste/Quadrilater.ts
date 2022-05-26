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

export class Ponto_AB {

    /* Atributos */
    PontoA: Array<number> = [10,15];
    PontoB: Array<number> = [20,10];


    /* Métodos */

    /* Método Construtor */    


    pertenceArea(): void{
        if(this.PontoA[0] <  this.()  && this.getPontoX() <= this.PontoB[0] && this.PontoB[1] < this.getPontoY() && this.getPontoY() <= this.PontoA[1]){
            console.log("Pertence")
        }
    }
}