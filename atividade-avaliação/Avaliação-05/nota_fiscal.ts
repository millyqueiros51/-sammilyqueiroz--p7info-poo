import {Cliente} from "./cliente";
import {ItemNotaFiscal} from "./item_nota_fiscal";
export class NotaFiscal {

    /* Atributos */
    id: number;
    codigo:number; 
    data: Date;
    cliente: Cliente;
    items :  Array<ItemNotaFiscal>;  

    /* Métodos */

    /* Método Construtor */    
    constructor (id : number, codigo: number, cliente : Cliente ) {
        this.id = id;
        this.codigo = codigo;
        this.data = new Date(); 
        this.cliente = cliente; 
        this.items = new Array<ItemNotaFiscal>();
    }

    /* Métodos Acessores */
    getid(): number {
        return this.id;
    }

    getcodigo(): number {
        return this.codigo;
    }

    getdata(): Date {
        return this.data;
    }

    /* Métodos Modificadores */     
    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setdata(data : Date) : void {
        this.data = data;
    }

    adicionarItem(item: ItemNotaFiscal) {
        this.items.push(item);
    }

    // Percorrer o array items e calcular o valor total da NotaFiscal
    calcularValorNotaFiscal() : number {
        let valorNota = 0;
        
        for (let i = 0; i < this.items.length; i++) {
            valorNota += this.items[i].valor;
        }

        return valorNota;
    }

    // Imprimir a NotaFiscal conforme o Layout definido
    imprimirNotaFiscal(): void {
        let date = new Date();
        let dia = date.getDate().toString();
        let diaF = (dia.length == 1) ? '0' + dia : dia;
        let mes = (date.getMonth()+1).toString();
        let mesF = (mes.length == 1) ? '0' + mes : mes;

        console.log("-------------------------------------------------------------------------------------------");
        console.log('NOTA FISCAL ' + '(' + diaF + '/' + mesF + '/' + date.getFullYear() + ')');
        console.log('ID do cliente: ' + this.cliente.getid());
        console.log('Nome do cliente: ' + this.cliente.getnome());
        console.log('CPF/CNPJ: ' + this.cliente.getcnpjcpf());
        console.log("-------------------------------------------------------------------------------------------");
        console.log("ITENS");
        console.log("-------------------------------------------------------------------------------------------");
        console.log('Seq\tDescrição\t\t\tQTD\tValor Unit\t\tPreço');
        console.log('---\t---------\t\t\t---\t----------\t\t-----');
        
        for (let i = 0; i < this.items.length; i++) {
            console.log(
                this.items[i].id +'\t' +
                this.items[i].produto.getdescricao() + '\t\t\t' +
                this.items[i].quantidade + '\t' +
                this.items[i].valor.toFixed(2) + '\t\t\t' +
                (this.items[i].valor * this.items[i].quantidade).toFixed(2)
            )
        }
        
        console.log("___________________________________________________________________________________________");
        console.log('Valor Total: ' + this.calcularValorNotaFiscal());
        
        
    }
}
