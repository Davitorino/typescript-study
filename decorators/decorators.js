"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregado...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
// new Eletrodomestico();
// new Eletrodomestico();
// new Eletrodomestico();
// @logarClasse
// @decorator({ a: 'Teste', b: 7 })
// @logarClasseSe(true)
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
};
Eletrodomestico = __decorate([
    logarObjeto,
    imprimivel
], Eletrodomestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (usuarioLogado === null || !usuarioLogado.admin) {
                throw new Error('Sem permissão');
            }
        }
    };
}
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(1024.56);
cc.sacar(500);
console.log(cc.getSaldo());
// cc.getSaldo = function() {
//   return this['saldo'] + 7000;
// }
console.log(cc.getSaldo());
// Object.freeze
function congelar(alvo, nomePropriedade, descritor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get() {
            return alvo['_' + nomePropriedade];
        },
        set(valor) {
            if (valor < 0) {
                throw new Error('Saldo inválido');
            }
            alvo['_' + nomePropriedade] = valor;
        },
    });
}
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Índice Param: ${indiceParam}`);
}
//# sourceMappingURL=decorators.js.map