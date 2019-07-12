const objeto = {
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
console.log(soma)

