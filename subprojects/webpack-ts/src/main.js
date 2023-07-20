"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
const livro_1 = __importDefault(require("./modelo/livro"));
const livro = new livro_1.default('Dom Quixote', 59.99, 0.10);
(0, jquery_1.default)('body').append(`<h1>${livro.nome}</h1>`);
(0, jquery_1.default)('body').append(`<h2>${livro.precoComDesconto()}</h2>`);
//# sourceMappingURL=main.js.map