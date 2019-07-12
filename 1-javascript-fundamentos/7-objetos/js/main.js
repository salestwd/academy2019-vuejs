/* const objeto = {
  nome: 'Margaret J. Shah',
  idade: 23,
  soma: function (a, b) {
    return a + b
  },
  nomeInteiro (nome, sobrenome) {
    return `${nome} ${sobrenome}`
  },
  usuario: {
    nome: 'Diane M.',
    sobrenome: 'Bankston',
    telefone: '843-469-9199',
  }
}

console.log(objeto.nomeInteiro(objeto.usuario.nome,objeto.usuario.sobrenome))

var soma = objeto.soma(5,5)
console.log(soma) */

//delete objeto.teste ->para apagar o valor do atributo
//Object.freeze(objeto) //Impedir que o objeto sejá alterado
//Object.freeze(objeto.usuario)

const produto = {
  marca: 'x',
  modelo: 'y',
  valorCompra: 99.99,
  imposto: 0.15,
  descricao: 'Produto muito bom para isso e aquilo',
  calcularValorVenda (a, b){
    return a+(a*b)
  }
}