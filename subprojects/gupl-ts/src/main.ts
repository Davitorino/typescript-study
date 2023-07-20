import $ from 'jquery';
import Livro from './modelo/livro';

const livro = new Livro('Dom Quixote', 59.99, 0.10);
$('body').append(`<h1>${livro.nome}</h1>`);
$('body').append(`<h2>${livro.precoComDesconto()}</h2>`);