interface Humano {
  nome: string
  idade?: number
  [prop: string]: any
  saudar(sobrenome: string): void
}

function saudar(pessoa: Humano) {
  console.log('Olá ' + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Teste';
}

const pessoa = {
  nome: 'Davi',
  idade: 20,
  saudar(sobrenome: string) {
    console.log(`Olá meu nome é ${this.nome} ${sobrenome}`)
  }
}

saudar(pessoa);
mudarNome(pessoa);
saudar(pessoa);
// saudar({ nome: 'Nome', idade: 27, altura: 1.75 });
pessoa.saudar('vitorino');

// Usando classes com interface
class Cliente implements Humano {
  nome: string = '';
  ultimaCompra: Date = new Date;
  saudar(sobrenome: string): void {
    console.log(`Olá meu nome é ${this.nome} ${sobrenome}`)
  }
}

const meuCliente = new Cliente;
meuCliente.nome = 'Rafa';
saudar(meuCliente);
meuCliente.saudar('vitorino');
console.log(meuCliente.ultimaCompra);

// Interface Função

interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo = function(base: number, expoente: number): number {
  return base ** expoente;
}

console.log(potencia(3, 10));
console.log(3 ** 10);
console.log(Math.pow(3, 10));

// Herança
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {};
}

class RealAB implements A, B {
  a(): void {};
  b(): void {};
}

class RealABC implements ABC {
  a(): void {};
  b(): void {};
  c(): void {};
}

abstract class AbstrataABD implements A, B {
  a(): void {};
  b(): void {};
  abstract d(): void;
}

interface Object {
  log(): void;
}

Object.prototype.log = function() {
  console.log(this.toString());
}

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
}

cli.log()