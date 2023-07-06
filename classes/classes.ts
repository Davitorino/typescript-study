class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(
    dia: number = 1,
    mes: number = 1,
    ano: number = 1970,
  ) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;  
  }
}

const aniversario =  new Data(26, 2, 2003);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data;
casamento.ano = 2024;
console.log(casamento);

class DataClean {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970,
  ) {}
}

const aniversarioClean =  new DataClean(26, 2, 2003);
aniversarioClean.dia = 4;
console.log(aniversarioClean.dia);
console.log(aniversarioClean);

const casamentoClean = new DataClean;
casamentoClean.ano = 2024;
console.log(casamentoClean);

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0,
  ) {}

  private getPrecoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  }

  public getResumo(): string {
    return `${this.nome} custa R$${this.getPrecoComDesconto().toFixed(2)} (${this.desconto * 100}% off)`;
  }
}

const lapis: Produto = new Produto('Lápis', 2.99);
const caneta: Produto = new Produto('Caneta', 3.99, 0.5);
console.log(lapis);
console.log(lapis.getResumo());
console.log(caneta);
console.log(caneta.getResumo());

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200,
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade: number = this.velocidadeAtual + delta;
    const velocidadeValida: boolean = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = novaVelocidade > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro('Ford', 'Ka', 185);

Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(20).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());

class Ferrari extends Carro {
  constructor(model: string, velocidadeMaxima: number) {
    super('Ferrari', model, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());

class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(idade: number) {
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
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return Matematica.PI * (raio ** 2);
  }
}

// const m1 = new Matematica();
// console.log(m1.areaCirc(4));

console.log(Matematica.areaCirc(4));

// exemplo classe abstrata

abstract class X {
  abstract y(a: number): number;

  w(b: number): void {
    console.log(b);
  }
}

// console.log(new X()); <--- erro, classe abstrata

abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((prev, cur) => prev + cur);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((prev, cur) => prev * cur);
  }
}

const c1: Calculo = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

const c2: Calculo = new Multiplicacao();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());

class Unico {
  private static instance: Unico = new Unico;
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance;
  }

  agora(): Date {
    return new Date;
  }
}

// const errado = new Unico();
console.log(Unico.getInstance().agora());

// somente leitura
class Aviao {
  public readonly modelo: string;

  constructor(
    modelo: string,
    public readonly prefixo: string,
  ) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8';
// turboHelice.prefixo = 'PT-DEF';