export class Ponto_A {

    /* Atributos */
    id: number;
    codigo:number; 

    /* Métodos */

    /* Método Construtor */    
    constructor (id : number, codigo: number) {
        this.id = id;
        this.codigo = codigo;

    }

    /* Métodos Acessores */
    getid(): number {
        return this.id;
    }

    getcodigo(): number {
        return this.codigo;
    }

    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    pertenceArea(): void{
        if(this.getid() <  3 && this.getcodigo() <= 5){
            console.log("Pertence")
        }
    }
}