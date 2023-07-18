"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('Teste'));
console.log(echo(27));
console.log(echo({ nome: 'teste', idade: 27 }));
// Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Teste'));
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'teste', idade: 27 }));
// Generics in the API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.8);
// avaliacoes.push('5.5');
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach((elm) => console.log(elm));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'teste', idade: 1 },
    { nome: 'testinho', idade: 2 },
    { nome: 'testao', idade: 3 },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Generic Class
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'Opa').executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 434).executar());
class DataDiferenca extends OperacaoBinaria {
    getTime(data) {
        const { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const diferenca = Math.abs(this.getTime(this.operando1) - this.getTime(this.operando2));
        const dias = Math.ceil(diferenca / (24 * 60 * 60 * 1000));
        return `${dias} dia(s) de diferença`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DataDiferenca(d1, d2).executar());
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elm) {
        this.fila.push(elm);
    }
    proximo() {
        if (this.fila.length) {
            const [elm] = this.fila.splice(0, 1);
            return elm;
        }
        return null;
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Gui', 'Pedro', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('Davi');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
const filaNumeros = new Fila(1, 2, 3);
filaNumeros.imprimir();
class Mapa {
    constructor() {
        this.elementos = new Array;
    }
    obter(chave) {
        return this.elementos.find((elemento) => elemento.chave === chave) || null;
    }
    colocar(elemento) {
        const existente = this.obter(elemento.chave);
        if (existente) {
            existente.valor = elemento.valor;
            return;
        }
        else {
            this.elementos.push(elemento);
        }
    }
    limpar() {
        this.elementos = new Array;
    }
    imprimir() {
        console.log(this.elementos);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map