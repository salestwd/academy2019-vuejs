const a = 10
const b = 5
const c = '5'

/*
  Operadores de comparação
  - igual a ==
  - identico a ===
  - diferente !=
  - maior que >
  - maior ou igual a >=
  - menor que < 
  - menor ou igual a <=
*/

console.log('igual a:', b == c)
console.log('identico:', b === c)
console.log('diferente:', b != c)
console.log('realmente é diferente', b !== c)
console.log('imaior que:', b > c)
console.log('maior ou igual:', b >= c)
console.log('menor que:', b < c)
console.log('menor ou igual:', b <= c)


/*
 Operadores Lógicos
 - e
 - ou
 - negação
*/

/*
 - If
 - ternário
*/

if (5 > 2){
  console.log('é')
}else{
  console.log('Não é')
}

const maior = 4 > 2 ? 'é' : 'não é'

console.log('maior ->', a > b && b == c)
console.log('maior ->', a > b || b == c)
console.log('maior ->', !(a > b) && b == c)