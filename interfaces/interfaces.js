"use strict";
function saudar(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Teste';
}
const pessoa = {
    nome: 'Davi',
    idade: 20,
    saudar(sobrenome) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudar(pessoa);
mudarNome(pessoa);
saudar(pessoa);
// saudar({ nome: 'Nome', idade: 27, altura: 1.75 });
pessoa.saudar('vitorino');
// Usando classes com interface
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Rafa';
saudar(meuCliente);
meuCliente.saudar('vitorino');
console.log(meuCliente.ultimaCompra);
let potencia = function (base, expoente) {
    return base ** expoente;
};
console.log(potencia(3, 10));
console.log(3 ** 10);
console.log(Math.pow(3, 10));
class RealA {
    a() { }
    ;
}
class RealAB {
    a() { }
    ;
    b() { }
    ;
}
class RealABC {
    a() { }
    ;
    b() { }
    ;
    c() { }
    ;
}
class AbstrataABD {
    a() { }
    ;
    b() { }
    ;
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map