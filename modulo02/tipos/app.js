"use strict";
// Data 21/03/25
// Autor Lucas Bonfim de Jesus <@Kazbonfim>
// Referência https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// Tipos primitivos
// => Textos
const nome = 'Lucas Bonfim de Jesus'; // com aspas
// => Numéricos
const idade = 27; // sem aspas
// => Booleanos
const isEmpregado = false; // ou 'true'
// => Arrays
const profissao = ['desenvolvedor', 'engenheiro', 'recepcionista', 'criativo'];
// => Mais Arrays
const animais = ['Cachorro', 'Gato', 'Elefante', 'Tigre', 'Guepardo'];
// => Objetos
const euMesmo = { nome, idade, isEmpregado, profissao: profissao[0] };
console.log(euMesmo);
// => Mais Objetos
let carro = { modelo: 'Ferrari testarossa', fabricante: 'Ferrari', ano: 1984 }; // Uma forma de declarar, e inicializar o objeto ao mesmo tempo
// Criando um novo objeto, a partir de um modelo pré-definido
carro = { modelo: 'Ferrari testarossa', fabricante: 'Ferrari', ano: 1984 };
console.log(carro);
