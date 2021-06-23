const Binary = require('./binary-search');

let koleksi = [1, 4, 9, 12, 24, 31, 44, 49, 50, 56];
let kueri = 50;

const binary_search = new Binary();
console.log(binary_search.binary_search(koleksi, kueri))
