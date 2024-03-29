function logarClasse(construtor: Function) {
  console.log(construtor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string, b: number }) {
  return function(_: Function) {
    console.log(obj.a + ' ' + obj.b);
  }
  
}

type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
  console.log('Carregado...')
  return class extends construtor {
    constructor(...args: any[]) {
      console.log('Antes...');
      super(...args);
      console.log('Depois...');
    }
  }
}

interface Eletrodomestico {
  imprimir?(): void;
}

// new Eletrodomestico();
// new Eletrodomestico();
// new Eletrodomestico();

// @logarClasse
// @decorator({ a: 'Teste', b: 7 })
// @logarClasseSe(true)
@logarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('novo...')
  }
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function() {
    console.log(this);
  }
}

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir();

// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true
}

function perfilAdmin<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args);
      if (usuarioLogado === null || !usuarioLogado.admin) {
        throw new Error('Sem permissão');
      }
    }
  };
}

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado!')
  }
}

new MudancaAdministrativa().critico()

class ContaCorrente {
  @naoNegativo
  private saldo: number

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @congelar
  sacar(@paramInfo valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    }
  }

  @congelar
  getSaldo() {
    return this.saldo;
  }
}


const cc = new ContaCorrente(1024.56);
cc.sacar(500);
console.log(cc.getSaldo());

// cc.getSaldo = function() {
//   return this['saldo'] + 7000;
// }
console.log(cc.getSaldo());

// Object.freeze
function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor) {
  console.log(alvo);
  console.log(nomePropriedade);
  descritor.writable = false;
}

function naoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[nomePropriedade];
  Object.defineProperty(alvo, nomePropriedade, {
    get(): any {
      return alvo['_' + nomePropriedade];
    },
    set(valor: any): void {
      if (valor < 0) {
        throw new Error('Saldo inválido');
      }

      alvo['_' + nomePropriedade] = valor;
    },
  })
}

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(`Alvo: ${alvo}`);
  console.log(`Método: ${nomeMetodo}`);
  console.log(`Índice Param: ${indiceParam}`);
}