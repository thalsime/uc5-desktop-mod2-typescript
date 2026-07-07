// Exercício 3: Validação de cadastro com utilitário de tipo Omit<>

interface Produto {
  id: number
  nome: string
  preco: number
  quantidade: number
}

interface ResultadoValidacao {
  valido: boolean
  erros: Partial<Record<keyof Omit<Produto, 'id'>, string>>
}

function validarCadastroProduto(dados: Omit<Produto, 'id'>): ResultadoValidacao {
  const erros: Partial<Record<keyof Omit<Produto, 'id'>, string>> = {}

  if (!dados.nome || dados.nome.trim().length < 3) {
    erros.nome = 'Nome deve ter ao menos 3 caracteres.'
  }
  if (dados.preco <= 0) {
    erros.preco = 'Preço deve ser maior que zero.'
  }
  if (!Number.isInteger(dados.quantidade) || dados.quantidade < 0) {
    erros.quantidade = 'Quantidade deve ser um inteiro não negativo.'
  }

  return { valido: Object.keys(erros).length === 0, erros }
}

const dadosInvalidos = { nome: 'AB', preco: -10, quantidade: 1.5 }
const validacao = validarCadastroProduto(dadosInvalidos)
console.log('Resultado da validação:', JSON.stringify(validacao, null, 2))
// Saída esperada:
// Resultado da validação: {
//   "valido": false,
//   "erros": {
//     "nome": "Nome deve ter ao menos 3 caracteres.",
//     "preco": "Preço deve ser maior que zero.",
//     "quantidade": "Quantidade deve ser um inteiro não negativo."
//   }
// }

export {}
