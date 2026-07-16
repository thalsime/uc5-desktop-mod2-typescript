// Exercício 3: Validação do formulário de cadastro

// O que o formulário envia: um produto SEM o id, porque quem gera o id é o
// banco, no INSERT. Antes de salvar, esse valor ainda não existe.
interface ProdutoCadastro {
  nome: string
  preco: number
  quantidade: number
  idCategoria: number
}

// Os campos são opcionais: cada mensagem só aparece se a regra falhar.
// As chaves são conhecidas desde já, então isto é uma interface - não um dicionário.
interface ErrosProduto {
  nome?: string
  preco?: string
  quantidade?: string
}

interface ResultadoValidacao {
  valido: boolean
  erros: ErrosProduto
}

function validarCadastroProduto(dados: ProdutoCadastro): ResultadoValidacao {
  const erros: ErrosProduto = {}

  if (!dados.nome || dados.nome.trim().length < 3) {
    erros.nome = 'Nome deve ter ao menos 3 caracteres.'
  }
  if (dados.preco <= 0) {
    erros.preco = 'Preço deve ser maior que zero.'
  }
  if (!Number.isInteger(dados.quantidade) || dados.quantidade < 0) {
    erros.quantidade = 'Quantidade deve ser um inteiro não negativo.'
  }

  // O valido sai do próprio objeto de erros: uma fonte de verdade só,
  // sem uma variável paralela para esquecer de atualizar.
  return { valido: Object.keys(erros).length === 0, erros }
}

const dadosInvalidos: ProdutoCadastro = { nome: 'AB', preco: -10, quantidade: 1.5, idCategoria: 1 }
console.log('Cadastro inválido:', JSON.stringify(validarCadastroProduto(dadosInvalidos), null, 2))
// Saída esperada:
// Cadastro inválido: {
//   "valido": false,
//   "erros": {
//     "nome": "Nome deve ter ao menos 3 caracteres.",
//     "preco": "Preço deve ser maior que zero.",
//     "quantidade": "Quantidade deve ser um inteiro não negativo."
//   }
// }

const dadosValidos: ProdutoCadastro = { nome: 'Teclado Mecânico', preco: 150.0, quantidade: 10, idCategoria: 1 }
console.log('Cadastro válido:', JSON.stringify(validarCadastroProduto(dadosValidos), null, 2))
// Saída esperada:
// Cadastro válido: {
//   "valido": true,
//   "erros": {}
// }

export {}
