"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(26, 2, 2003);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data;
casamento.ano = 2024;
console.log(casamento);
class DataClean {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioClean = new DataClean(26, 2, 2003);
aniversarioClean.dia = 4;
console.log(aniversarioClean.dia);
console.log(aniversarioClean);
const casamentoClean = new DataClean;
casamentoClean.ano = 2024;
console.log(casamentoClean);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    getPrecoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    getResumo() {
        return `${this.nome} custa R$${this.getPrecoComDesconto().toFixed(2)} (${this.desconto * 100}% off)`;
    }
}
const lapis = new Produto('Lápis', 2.99);
const caneta = new Produto('Caneta', 3.99, 0.5);
console.log(lapis);
console.log(lapis.getResumo());
console.log(caneta);
console.log(caneta.getResumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = novaVelocidade > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(20).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
class Ferrari extends Carro {
    constructor(model, velocidadeMaxima) {
        super('Ferrari', model, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        if (idade >= 0 && idade <= 120) {
            this._idade = idade;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * (raio ** 2);
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica();
// console.log(m1.areaCirc(4));
console.log(Matematica.areaCirc(4));
// exemplo classe abstrata
class X {
    w(b) {
        console.log(b);
    }
}
// console.log(new X()); <--- erro, classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((prev, cur) => prev + cur);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((prev, cur) => prev * cur);
    }
}
const c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
const c2 = new Multiplicacao();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
// const errado = new Unico();
console.log(Unico.getInstance().agora());
// somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8';
// turboHelice.prefixo = 'PT-DEF';
//# sourceMappingURL=classes.js.map