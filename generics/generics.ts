function echo(objeto: any) {
  return objeto;
}

console.log(echo('Teste'));
console.log(echo(27));
console.log(echo({ nome: 'teste', idade: 27 }));

// Generics
function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhorado<string>('Teste'));
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: 'teste', idade: 27 }));

// Generics in the API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.8);
// avaliacoes.push('5.5');
console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]) {
  args.forEach((elm) => console.log(elm));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['Ana', 'Bia', 'Carlos']);
// imprimir<{ nome: string, idade: number }>([
//   { nome: 'teste', idade: 1 },
//   { nome: 'testinho', idade: 2 },
//   { nome: 'testao', idade: 3 },
// ]);

type Aluno = { nome: string, idade: number }

imprimir<Aluno>([
  { nome: 'teste', idade: 1 },
  { nome: 'testinho', idade: 2 },
  { nome: 'testao', idade: 3 },
]);

// Generic type
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>('Alguma coisa'));

// Generic Class
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

// console.log(new OperacaoBinaria('Bom', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'Opa').executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
  public executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 434).executar());

class DataDiferenca extends OperacaoBinaria<Data, string> {
  private getTime(data: Data): number {
    const { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  public executar(): string {
    const diferenca = Math.abs(this.getTime(this.operando1) - this.getTime(this.operando2));
    const dias = Math.ceil(diferenca / (24 * 60 * 60 * 1000));
    return `${dias} dia(s) de diferença`;
  }
}

const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DataDiferenca(d1, d2).executar());

class Fila<T extends number | string> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  public entrar(elm: T): void {
    this.fila.push(elm);
  }

  public proximo(): T | null {
    if (this.fila.length) {
      const [elm] = this.fila.splice(0, 1);
      return elm;
    }

    return null;
  }

  public imprimir(): void {
    console.log(this.fila);
  }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu');

fila.imprimir();
fila.entrar('Davi');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();

const filaNumeros = new Fila<number>(1, 2, 3);
filaNumeros.imprimir();

// const filaBooelan = new Fila<boolean>(true, false);

// Challenge
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = {
  chave: C,
  valor: V,
}

class Mapa<C, V> {
  private elementos: Array<Par<C, V>> = new Array<Par<C, V>>;

  constructor() {}

  public obter(chave: C): Par<C, V> | null {
    return this.elementos.find((elemento) => elemento.chave === chave) || null;
  }

  public colocar(elemento: Par<C, V>): void {
    const existente = this.obter(elemento.chave);

    if (existente) {
      existente.valor = elemento.valor;
      return;
    } else {
      this.elementos.push(elemento);
    }
  }

  public limpar(): void {
    this.elementos = new Array<Par<C, V>>;
  }

  public imprimir(): void {
    console.log(this.elementos);
  }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()