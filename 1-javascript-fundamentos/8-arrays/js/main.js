const numeros = [10, 5, 3, 3, 2, 9]
const pessoas = [
  {
    nome: 'Christie C. Craighead',
    idade: 15
  },
  {
    nome: 'Arlene T. Baker',
    idade: 14
  },
  {
    nome: 'Christie C. Craighead',
    idade: 18
  },
  {
    nome: 'Scott K. Parham',
    idade: 23
  },
  {
    nome: 'Christie C. Craighead',
    idade: 30
  },
  {
    nome: 'Jeremiah J. Lobel',
    idade: 8
  },
  {
    nome: 'Deborah W. Coulter',
    idade: 21
  },
]
const salas = ['A', 'B', 'C', 'D', 'E']

// map

const alunosSalas = pessoas.map(pessoa => {
  return {
    ...pessoa,
    sala: salas[Math.floor(Math.random()*salas.length)]
  }
})

alunosSalas.forEach(element => {
  console.log(element.nome)
});




// filter

const alunosMaioresDeIdade = pessoas.filter(pessoa => {
  return pessoa.idade <= 18
})

alunosMaioresDeIdade.forEach(element =>{
  console.log(element.nome, element.idade)
})

// reduce
const valorInicial = 0
const somaDosNumeros = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual
}, valorInicial)

console.log(somaDosNumeros)

var rockets = [
  { country:'Russia', launches:32 },
  { country:'US', launches:23 },
  { country:'China', launches:16 },
  { country:'Europe(ESA)', launches:7 },
  { country:'India', launches:4 },
  { country:'Japan', launches:3 }
];

var sum = rockets.reduce( function( prevVal, elem ) {
  return prevVal + elem.filter(elem => {
    return elem.launches > 10
  });
}, 0 )

console.log('Soma de foguetes: ', sum)

const debora = pessoas.find(pessoa => pessoa.nome === 'Deborah W. Coulter')

console.log(debora)

// const comeca = pessoas.filter(pessoa => {
//   return pessoa.nome === 'C'
// })

// const mediaIdade = pessoas.reduce((acumulador, valorAtual) => {
//   return (acumulador + valorAtual.idade)*
// })