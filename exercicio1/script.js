// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
let arraySacolao = []
// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.
const sacolao1 = {
    nome: `Maça`,
    preco: 6.00,
    disponibilidade: true
}

const sacolao2 = {
    nome: `Banana`,
    preco: 3.50,
    disponibilidade: true
}

const sacolao3 = {
    nome: `Laranja`,
    preco: 4.50,
    disponibilidade: false
}

arraySacolao.push(sacolao1, sacolao2, sacolao3)
// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.
console.log(arraySacolao[0])
console.log(arraySacolao[1])
console.log(arraySacolao[2])
console.log(arraySacolao)